import type { AxiosResponse } from "axios";
import { IWord } from "@dictionary/core";
import { getApi } from "../utils";

interface ApiRespose<T> {
  items: T;
  statusCode: "200";
  message: string;
}

export const getWords = async (): Promise<
  AxiosResponse<ApiRespose<IWord[]>>
> => {
  const api = getApi();
  const result = await api.get("words");
  return result;
};
