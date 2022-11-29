import createHTTPClient from "./createHTTPClient";

const createAPI = () => {
  const api = {
    generate: () => {
      return async () => {
        const client = createHTTPClient();

        const requestFn = client["get"];

        return requestFn("", {});
      };
    },
  };
};

export default createAPI;
