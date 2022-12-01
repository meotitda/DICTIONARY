import { Trie } from "dictionary-utils";
import { DictionaryTokenCache, ICache } from "./cache";
import { DuplciatedError, DSyntaxError } from "./errors";
import { BodyToken, ITokens, LabelToken, TagToken, TitleToken } from "./tokens";
import { EKeyword, ELabel, EToken, IWord } from "./types";

class Parser {
  private tokens: ITokens = {
    title: null,
    labels: [],
    tags: [],
    body: null,
  };

  private _cursor = 0;

  private line = 0;

  private text = "";

  private get cursor() {
    return this._cursor;
  }

  private get errorLineStr() {
    return this.text.split(EKeyword.LineBreak)[this.line].trim();
  }

  private moveCursor(amount = 1) {
    const result = this._cursor;
    for (let i = 0; i < amount && this._cursor < this.text.length; i++) {
      if (this.text[this._cursor] === EKeyword.LineBreak) this.line++;
      this._cursor++;
    }
    return result;
  }

  private resetCursor() {
    this._cursor = 0;
  }

  private cache: ICache;

  private labelTrie: Trie;
  private tagKeywordTrie: Trie;

  constructor(cache?: ICache) {
    this.labelTrie = new Trie();
    this.tagKeywordTrie = new Trie();

    Object.values(ELabel).map((label) => this.labelTrie.insert(label));
    this.tagKeywordTrie.insert("href");

    this.paths.set(EToken.Body, this.tokenizeBody.bind(this));
    this.paths.set(EToken.Title, this.tokenizerTitle.bind(this));
    this.paths.set(EToken.Label, this.tokenizeLabel.bind(this));
    this.paths.set(EToken.Tag, this.tokenizeTag.bind(this));
    this.paths.set("Space", this.next.bind(this));

    this.cache = cache ? cache : new DictionaryTokenCache();
  }

  private next() {
    return null;
  }

  public nomalizeToken(): IWord {
    if (!this.tokens.title || !this.tokens.body)
      throw new Error("Syntax Error");

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
        return EToken.Body;
      }
      case text[i] === EKeyword.Sharp && text[i + 1] === EKeyword.Space: {
        return EToken.Title;
      }
      case text[i] === EKeyword.Mark &&
        text[i + 1] === EKeyword.OpenSqureBracket: {
        return EToken.Label;
      }
      case text[i] === EKeyword.OpenAngleBrackets &&
        text[i + 1] === EKeyword.A &&
        text[i + 2] === EKeyword.Space: {
        return EToken.Tag;
      }
      case text[i] === EKeyword.Space || text[i] === EKeyword.LineBreak:
        return "Space";
      default:
        throw new DSyntaxError("유효하지 않은 키워드 입니다.", {
          errorCursor: this.cursor,
          errorLineStr: this.errorLineStr,
          errorLine: this.line,
        });
    }
  }

  private tokenizerTitle(text: string): void {
    if (this.tokens.title)
      throw new DuplciatedError("Title은 단어 당 하나만 가질 수 있습니다.", {
        errorCursor: this.cursor,
        errorLineStr: this.errorLineStr,
        errorLine: this.line,
      });
    let result = "";
    this.moveCursor(2);
    while (text[this.cursor] !== EKeyword.LineBreak) {
      result += text[this.moveCursor()];
    }
    this.tokens.title = new TitleToken(result);
    return;
  }

  private tokenizeBody(text: string): void {
    this.moveCursor(3);
    // eslint-disable-next-line no-empty
    while (text[this.moveCursor(1)] === "-") {}

    if (text[this.cursor - 1] !== "\n") return;

    if (text[this.cursor] !== "\n") {
      throw new DSyntaxError(
        "Body 라인 이후에는 반드시 공백이 하나 더 있어야 합니다.",
        {
          errorCursor: this.cursor,
          errorLineStr: this.errorLineStr,
          errorLine: this.line,
        }
      );
    }

    this.moveCursor(1);
    let body = "";

    while (this.cursor < text.length) {
      body += text[this.moveCursor(1)];
    }
    this.tokens.body = new BodyToken(body);
  }

  private tokenizeLabel(text: string): void {
    let label = "";
    this.moveCursor(2);
    while (this.labelTrie.iterateSearch(text[this.cursor])) {
      label += text[this.moveCursor(1)];
    }

    try {
      const labelToken = new LabelToken(label as any);
      this.tokens.labels.push(labelToken);
    } catch (UndefinedLabelError) {
      throw new DSyntaxError(`${label}는 존재하지 않는 라벨입니다.`, {
        errorCursor: this.cursor,
        errorLineStr: this.errorLineStr,
        errorLine: this.line,
      });
    }

    if (text[this.moveCursor(1)] !== EKeyword.CloseSqureBracket) {
      throw new DSyntaxError("유효하지 않은 키워드 입니다.", {
        errorCursor: this.cursor,
        errorLineStr: this.errorLineStr,
        errorLine: this.line,
      });
    }

    if (text[this.moveCursor(1)] !== EKeyword.OpenRoundBrackets) {
      throw new DSyntaxError(
        "라벨은 반드시 라벨 이미지가 포함 되어야 합니다.",
        {
          errorCursor: this.cursor,
          errorLineStr: this.errorLineStr,
          errorLine: this.line,
        }
      );
    }

    while (text[this.moveCursor(1)] !== EKeyword.ClosedRoundBrackets) {
      if (text[this.cursor] === EKeyword.LineBreak)
        throw new DSyntaxError(
          "라벨은 반드시 라벨 이미지가 포함 되어야 합니다.",
          {
            errorCursor: this.cursor,
            errorLineStr: this.errorLineStr,
            errorLine: this.line,
          }
        );
    }

    return;
  }

  private tokenizeTag(text: string): void {
    const TagAttributeState = {
      Keyword: "Keyword",
      Value: "Value",
    };
    const attributes = {};
    let keyword = "";

    this.moveCursor(3);
    let tempKey = "",
      tempValue = "",
      state = TagAttributeState.Keyword;
    // 여는 태그 처리
    while (
      text[this.cursor] !== EKeyword.ClosedAngleBrackets &&
      this.cursor < text.length
    ) {
      const curr = text[this.moveCursor(1)];

      if (curr === EKeyword.Space) {
        if (!tempKey) continue;

        Object.assign(attributes, {
          [tempKey]: tempValue ? tempValue : true,
        });

        (tempKey = ""), (tempValue = "");

        state = TagAttributeState.Keyword;
      } else if (curr === EKeyword.Eqaul) {
        if (!tempKey)
          throw new DSyntaxError("키가 없습니다.", {
            errorCursor: this.cursor,
            errorLineStr: this.errorLineStr,
            errorLine: this.line,
          });
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
    this.moveCursor(1);
    const curr = text[this.cursor];
    if (curr !== EKeyword.Sharp) {
      throw new DSyntaxError("키워드는 hash여야 합니다.", {
        errorCursor: this.cursor,
        errorLineStr: this.errorLineStr,
        errorLine: this.line,
      });
    }
    this.moveCursor(1);
    while (text[this.cursor] !== EKeyword.OpenAngleBrackets) {
      keyword += text[this.moveCursor(1)];
    }

    if (
      !(
        text[this.cursor + 1] === EKeyword.Slash &&
        text[this.cursor + 2] === EKeyword.A &&
        text[this.cursor + 3] === EKeyword.ClosedAngleBrackets
      )
    ) {
      throw new DSyntaxError("잘못 닫힌 태그입니다.", {
        errorCursor: this.cursor,
        errorLineStr: this.errorLineStr,
        errorLine: this.line,
      });
    }

    this.moveCursor(3);
    this.tokens.tags.push(new TagToken(keyword, attributes));
  }

  public parse(text: string): ITokens {
    if (this.cache.has(text)) return this.cache.get(text) as ITokens;
    this.text = text;
    this.resetCursor();
    this.tokens = {
      title: null,
      labels: [],
      tags: [],
      body: null,
    };

    for (; this.cursor < text.length - 2; this.moveCursor(1)) {
      const path = this.route(text);
      this.paths.get(path)(text);
    }

    this.cache.set(text, this.tokens);

    return this.tokens;
  }
}

export default Parser;
