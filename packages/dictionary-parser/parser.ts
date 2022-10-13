import { Trie } from "dictionary-utils";

const Keyword = {
  Sharp: "#",
  Space: " ",
  LineBreak: "\n",
  Mark: "!",
  OpenSqureBracket: "[",
  CloseSqureBracket: "]",
} as const;

enum TokenType {
  Word,
  Label
}

const LabelType = {
  Common: "Common",
  Frontend: "Frontend",
  Backend: "Backend",
  Database: "Database",
  Devops: "Devops",
};

class Token {
  private _content: string;
  constructor(content: string) {
    this._content = content;
  }

  public get content() {
    return this._content;
  }
}

class WordToken extends Token {
  private _type: TokenType;
  constructor(params) {
    super(params);

    this._type = TokenType.Word;
  }

  public get type() {
    return this._type;
  }
}

class LabelToken extends Token {
  private _type: TokenType;
  constructor(params) {
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
  };

  private labelTrie:Trie;

  constructor() {
    this.labelTrie = new Trie();

    Object.values(LabelType).map((label)=> this.labelTrie.insert(label));
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
        while (this.labelTrie.iterateSearch(text[i])){
          label += text[i++];
        }
        const labelToken = new LabelToken(label);
        this.tokens.labels.push(labelToken);
      }
    }
    return this.tokens.labels;
  }
}

export default Parser;
