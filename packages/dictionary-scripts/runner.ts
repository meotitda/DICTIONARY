import fs from "fs";
import path from "path";
import { Parser } from "../dictionary-core";
import { dfsDirectory } from "dictionary-utils";

const runner = (projectRoot: string) => {
  const DIC_ROOT = path.resolve(projectRoot, "DIC");
  const result = [];
  const parse = (file: string) => {
    const parser = new Parser();
    const content = fs.readFileSync(file, { encoding: "utf-8" });
    parser.parse(content);
    const word = parser.nomalizeToken();

    result.push({
      [word.title]: { ...word, path: file },
    });
  };

  dfsDirectory(DIC_ROOT, parse);
  return result;
};

export default runner;
