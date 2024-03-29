import { UndefinedLabelError } from "./errors";
import { ELabel, EToken, TLabel, TToken } from "./types";

export class Token {
  protected _type: TToken;
  protected _content: string;
  constructor(content: string) {
    this._content = content;
  }

  public get content() {
    return this._content;
  }
}

export class TagToken extends Token {
  private _attributes;
  constructor(params: string, attributes: unknown) {
    super(params);
    this._attributes = attributes;

    this._type = EToken.Tag;
  }

  public get url() {
    // @ts-ignore
    return this._attributes["href"];
  }
}

export class TitleToken extends Token {
  constructor(params: string) {
    super(params);

    this._type = EToken.Title;
  }
}

export class BodyToken extends Token {
  constructor(params: string) {
    super(params);

    this._type = EToken.Body;
  }
}

export class LabelToken extends Token {
  constructor(params: TLabel) {
    if (!Object.values(ELabel).includes(params))
      throw new UndefinedLabelError(`${params}는 존재하지 않는 라벨입니다.`);
    super(params);

    this._type = EToken.Label;
  }

  public get type() {
    return this._type;
  }

  public get content() {
    return this._content as TLabel;
  }
}

export interface ITokens {
  title: TitleToken | null;
  labels: LabelToken[];
  tags: TagToken[];
  body: BodyToken | null;
}
