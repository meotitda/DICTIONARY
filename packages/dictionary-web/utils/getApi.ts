import axios, { AxiosInstance } from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:4000";

let api: AxiosInstance;

const getApi = () => {
  if (!api) {
    api = axios.create({
      baseURL: BASE_URL,
      // responseType: "json",
    });
  }
  return api;
};

export default getApi;
