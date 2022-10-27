import fs from "fs";
import path from "path";
import { Parser } from "dictionary-parser";
import { dfsDirectory } from "dictionary-utils";

const runner = (projectRoot: string) => {
  const DIC_ROOT = path.resolve(projectRoot, "DIC");
  const result = [];
  const parse = (file: string) => {
    const parser = new Parser();
    const content = fs.readFileSync(file, { encoding: "utf-8" });
    const tokens = parser.parse(content);
    result.push({
      [file]: tokens,
    });
  };

  dfsDirectory(DIC_ROOT, parse);
  return result;
};

export default runner;
