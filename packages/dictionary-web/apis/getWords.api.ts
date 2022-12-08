import axios, { AxiosResponse } from "axios";
import { IWord } from "@dictionary/core";

interface ApiRespose<T> {
  items: T;
  statusCode: "200";
  message: string;
}

export const getWords = async (): Promise<
  AxiosResponse<ApiRespose<IWord[]>>
> => {
  const instance = axios.create({
    baseURL: "http://localhost:4000",
    responseType: "json",
  });
  const result = await instance.get("words");
  return result;
};
