import { Trie } from "dictionary-utils";
import { DictionaryTokenCache, ICache } from "./cache";
import { DuplciatedError } from "./errors";
import { BodyToken, ITokens, LabelToken, TagToken, TitleToken } from "./tokens";
import { EKeyword, ELabel, IWord } from "./types";

class Parser {
  private tokens: ITokens = {
    title: null,
    labels: [],
    tags: [],
    body: null,
  };

  private cursor = 0;
  private cache: ICache;

  private labelTrie: Trie;
  private tagKeywordTrie: Trie;

  constructor(cache?: ICache) {
    this.labelTrie = new Trie();
    this.tagKeywordTrie = new Trie();

    Object.values(ELabel).map((label) => this.labelTrie.insert(label));
    this.tagKeywordTrie.insert("href");

    this.paths.set("Body", this.tokenizeBody.bind(this));
    this.paths.set("Title", this.tokenizerTitle.bind(this));
    this.paths.set("Label", this.tokenizeLabel.bind(this));
    this.paths.set("Tag", this.tokenizeTag.bind(this));
    this.paths.set("None", this.next.bind(this));

    this.cache = cache ? cache : new DictionaryTokenCache();
  }

  private next() {
    return null;
  }

  public nomalizeToken(): IWord {
    return {
      title: this.tokens.title.content,
      slug: this.tokens.title.content[0],
      labels: this.tokens.labels.map((label) => label.content),
      tags: this.tokens.tags.map((tag) => ({
        title: tag.content,
        link: tag.url,
      })),
      body: this.tokens.body.content,
    };
  }

  private paths = new Map();

  private route(text: string) {
    if (this.cache.has(text)) return this.cache.get(text);

    const i = this.cursor;
    switch (true) {
      case text[i] + text[i + 1] + text[i + 2] === EKeyword.Dash.repeat(3): {
        return "Body";
      }
      case text[i] === EKeyword.Sharp && text[i + 1] === EKeyword.Space: {
        return "Title";
      }
      case text[i] === EKeyword.Mark &&
        text[i + 1] === EKeyword.OpenSqureBracket: {
        return "Label";
      }
      case text[i] === EKeyword.OpenAngleBrackets &&
        text[i + 1] === EKeyword.A &&
        text[i + 2] === EKeyword.Space: {
        return "Tag";
      }
      default:
        return "None";
    }
  }

  private tokenizerTitle(text: string): void {
    if (this.tokens.title)
      throw new DuplciatedError("Title은 단어 당 하나만 가질 수 있습니다.");
    let result = "";
    this.cursor += 2;
    while (text[this.cursor] !== EKeyword.LineBreak) {
      result += text[this.cursor++];
    }
    this.tokens.title = new TitleToken(result);
    return;
  }

  private tokenizeBody(text: string): void {
    this.cursor += 3;
    // eslint-disable-next-line no-empty
    while (text[this.cursor++] === "-") {}

    if (text[this.cursor - 1] !== "\n") return;

    if (text[this.cursor] !== "\n") {
      throw new Error(
        "Invalid Syntax: You need to put a new line after body line"
      );
    }

    this.cursor++;
    let body = "";

    while (this.cursor < text.length) {
      body += text[this.cursor++];
    }
    this.tokens.body = new BodyToken(body);
  }

  private tokenizeLabel(text: string): void {
    let label = "";
    this.cursor += 2;
    while (this.labelTrie.iterateSearch(text[this.cursor])) {
      label += text[this.cursor++];
    }
    const labelToken = new LabelToken(label);
    this.tokens.labels.push(labelToken);
    return;
  }

  private tokenizeTag(text: string): void {
    const TagAttributeState = {
      Keyword: "Keyword",
      Value: "Value",
    };
    const attributes = {};
    let keyword = "";

    this.cursor += 3;
    let tempKey = "",
      tempValue = "",
      state = TagAttributeState.Keyword;
    // 여는 태그 처리
    while (
      text[this.cursor] !== EKeyword.ClosedAngleBrackets &&
      this.cursor < text.length
    ) {
      const curr = text[this.cursor++];

      if (curr === EKeyword.Space) {
        if (!tempKey) continue;

        Object.assign(attributes, {
          [tempKey]: tempValue ? tempValue : true,
        });

        (tempKey = ""), (tempValue = "");

        state = TagAttributeState.Keyword;
      } else if (curr === EKeyword.Eqaul) {
        if (!tempKey) throw new Error("키가 없습니다.");
        state = TagAttributeState.Value;
      } else {
        if (state === TagAttributeState.Keyword) {
          tempKey += curr;
        } else {
          if (curr === EKeyword.DoubleQuote) continue;
          tempValue += curr;
        }
      }
    }

    Object.assign(attributes, {
      [tempKey]: tempValue ? tempValue : !!tempValue,
    });

    // 키워드 처리
    const curr = text[++this.cursor];
    if (curr !== EKeyword.Sharp) {
      throw new Error("키워드는 hash여야 합니다.");
    }
    this.cursor++;
    while (text[this.cursor] !== EKeyword.OpenAngleBrackets) {
      keyword += text[this.cursor++];
    }

    if (
      !(
        text[this.cursor + 1] === EKeyword.Slash &&
        text[this.cursor + 2] === EKeyword.A &&
        text[this.cursor + 3] === EKeyword.ClosedAngleBrackets
      )
    ) {
      throw new Error("잘못 닫힌 태그");
    }

    this.cursor += 3;
    this.tokens.tags.push(new TagToken(keyword, attributes));
  }

  public parse(text: string): ITokens {
    if (this.cache.has(text)) return this.cache.get(text);
    this.cursor = 0;
    this.tokens = {
      title: null,
      labels: [],
      tags: [],
      body: null,
    };
    for (; this.cursor < text.length - 2; this.cursor++) {
      const path = this.route(text);
      this.paths.get(path)(text);
    }

    this.cache.set(text, this.tokens);

    return this.tokens;
  }
}

export default Parser;
