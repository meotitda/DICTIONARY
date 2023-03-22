import crypto from "crypto";
import { ITokens } from "./tokens";

export interface ICache {
  get(text: string): ITokens | undefined;
  set(text: string, value: ITokens): void;
  has(text: string): boolean;
  clear(): void;
}

export class DictionaryTokenCache implements ICache {
  private cache = new Map();

  public get(text: string): ITokens | undefined {
    const key = crypto.createHash("md5").update(text).digest("hex");
    if (this._has(key)) return this.cache.get(key);
  }
  public set(text: string, value: ITokens): void {
    const key = crypto.createHash("md5").update(text).digest("hex");
    this.cache.set(key, value);
  }
  public has(text: string): boolean {
    const key = crypto.createHash("md5").update(text).digest("hex");
    return this._has(key);
  }

  public clear(): void {
    this.cache.clear();
  }

  private _has(key: string) {
    return this.cache.has(key);
  }
}
