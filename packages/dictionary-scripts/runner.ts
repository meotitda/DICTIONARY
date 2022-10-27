import fs from "fs";
import path from "path";
import { Parser } from "dictionary-parser";
import { dfsDirectory } from "dictionary-utils";

const runner = (projectRoot: string) => {
  const DIC_ROOT = path.resolve(projectRoot, "DIC");

  const parse = (file: string) => {
    const parser = new Parser();
    const content = fs.readFileSync(file, { encoding: "utf-8" });
    const tokens = parser.parse(content);
    return {
      file: tokens,
    };
  };

  return dfsDirectory(DIC_ROOT, parse);
};

export default runner;
