import type { AxiosInstance } from "axios";
import axios from "axios";
const createHTTPClient = (): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  });

  return axiosInstance;
};

export default createHTTPClient;
