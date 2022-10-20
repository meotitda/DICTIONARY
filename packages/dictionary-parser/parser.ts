import { Trie } from "dictionary-utils";
import { UndefinedLabelError } from "./errors";

const Keyword = {
  Sharp: "#",
  Space: " ",
  LineBreak: "\n",
  Mark: "!",
  OpenAngleBrackets: "<",
  ClosedAngleBrackets: ">",
  A: "a",
  OpenSqureBracket: "[",
  CloseSqureBracket: "]",
  Eqaul: "=",
  Slash: "/",
  DoubleQuote: '"',
  Dash: "-",
} as const;

enum TokenType {
  Word,
  Label,
  Tag,
}

const LabelType = {
  Common: "Common",
  Frontend: "Frontend",
  Backend: "Backend",
  Database: "Database",
  Devops: "Devops",
};

const TagAttributeState = {
  Keyword: "Keyword",
  Value: "Value",
};

class Token {
  protected _type: TokenType;
  private _content: string;
  constructor(content: string) {
    this._content = content;
  }

  public get content() {
    return this._content;
  }
}

class TagToken extends Token {
  private _attributes;
  constructor(params, attributes) {
    super(params);
    this._attributes = attributes;

    this._type = TokenType.Tag;
  }

  public get url() {
    return this._attributes["href"];
  }
}

class WordToken extends Token {
  constructor(params) {
    super(params);

    this._type = TokenType.Word;
  }
}

class LabelToken extends Token {
  constructor(params) {
    if (!Object.values(LabelType).includes(params))
      throw new UndefinedLabelError(`${params}는 존재하지 않는 라벨입니다.`);
    super(params);

    this._type = TokenType.Label;
  }

  public get type() {
    return this._type;
  }
}

class Parser {
  private tokens = {
    word: null,
    labels: [],
    tags: [],
  };

  private labelTrie: Trie;
  private tagKeywordTrie: Trie;

  constructor() {
    this.labelTrie = new Trie();
    this.tagKeywordTrie = new Trie();

    Object.values(LabelType).map((label) => this.labelTrie.insert(label));
    this.tagKeywordTrie.insert("href");
  }

  public parse() {
    return "parser";
  }

  public searchWord(text: string) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      const target = text[i];

      if (target === Keyword.Sharp && text[i + 1] === Keyword.Space) {
        i += 2;
        while (text[i] !== Keyword.LineBreak) {
          result += text[i++];
        }
        this.tokens.word = new WordToken(result);
        return this.tokens.word;
      }
    }
    return null;
  }

  public searchLabels(text: string) {
    for (let i = 0; i < text.length; i++) {
      const target = text[i];

      if (target === Keyword.Mark && text[i + 1] === Keyword.OpenSqureBracket) {
        let label = "";
        i += 2;
        while (this.labelTrie.iterateSearch(text[i])) {
          label += text[i++];
        }
        const labelToken = new LabelToken(label);
        this.tokens.labels.push(labelToken);
      }
    }
    return this.tokens.labels;
  }

  public searchTags(text: string) {
    for (let i = 0; i < text.length; i++) {
      const target = text[i];

      if (
        target === Keyword.OpenAngleBrackets &&
        text[i + 1] === Keyword.A &&
        text[i + 2] === Keyword.Space
      ) {
        const attributes = {};
        let keyword = "";

        i += 3;
        let tempKey = "",
          tempValue = "",
          state = TagAttributeState.Keyword;
        // 여는 태그 처리
        while (text[i] !== Keyword.ClosedAngleBrackets && i < text.length) {
          const curr = text[i++];

          if (curr === Keyword.Space) {
            if (!tempKey) continue;

            Object.assign(attributes, {
              [tempKey]: tempValue ? tempValue : true,
            });

            (tempKey = ""), (tempValue = "");

            state = TagAttributeState.Keyword;
          } else if (curr === Keyword.Eqaul) {
            if (!tempKey) throw new Error("키가 없습니다.");
            state = TagAttributeState.Value;
          } else {
            if (state === TagAttributeState.Keyword) {
              tempKey += curr;
            } else {
              if (curr === Keyword.DoubleQuote) continue;
              tempValue += curr;
            }
          }
        }

        Object.assign(attributes, {
          [tempKey]: tempValue ? tempValue : !!tempValue,
        });

        // 키워드 처리
        const curr = text[++i];
        if (curr !== Keyword.Sharp) {
          throw new Error("키워드는 hash여야 합니다.");
        }
        i++;
        while (text[i] !== Keyword.OpenAngleBrackets) {
          keyword += text[i++];
        }

        if (
          !(
            text[i + 1] === Keyword.Slash &&
            text[i + 2] === Keyword.A &&
            text[i + 3] === Keyword.ClosedAngleBrackets
          )
        ) {
          throw new Error("잘못 닫힌 태그");
        }

        i += 3;

        // 키워드 적용

        this.tokens.tags.push(new TagToken(keyword, attributes));
      }
    }

    return this.tokens.tags;
  }

  public searchBody(text: string) {
    for (let i = 0; i < text.length - 2; i++) {
      if (text[i] + text[i + 1] + text[i + 2] === Keyword.Dash.repeat(3)) {
        i += 3;
        // eslint-disable-next-line no-empty
        while (text[i++] === "-") {}

        if (text[i - 1] !== "\n") continue;

        if (text[i] !== "\n") {
          throw new Error(
            "Invalid Syntax: You need to put a new line after body line"
          );
        }

        i++;
        let body = "";

        while (i < text.length) {
          body += text[i++];
        }

        return body;
      }
    }
    return null;
  }
}

export default Parser;
