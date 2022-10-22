import fs from "fs";
import path from "path";
import { Parser } from "dictionary-parser";
import { dfsDirectory } from "dictionary-utils";

const PROJECT_ROOT = path.resolve(__dirname, "../../");
const DIC_ROOT = path.resolve(PROJECT_ROOT, "DIC");

const result = dfsDirectory(DIC_ROOT, (file) => {
  const parser = new Parser();
  const content = fs.readFileSync(file, { encoding: "utf-8" });
  const tokens = parser.parse(content);
  return {
    file: tokens,
  };
});
