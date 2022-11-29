import runner from "./runner";
import mongoose from "mongoose";
import { ITag, IWord, TLabel } from "../dictionary-core/types";
import dotenv from "dotenv";
dotenv.config();

const ROOT = "../../";

// 1. 에러 핸들링
// 2. await 제거
// 3. O(n2) -> O(n)

interface MigrationIWord extends IWord {
  slug: string;
  title: string;
  labels: TLabel[];
  tags: ITag[];
  body: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

const { Schema } = mongoose;
const WordSchema = new Schema<MigrationIWord>({
  slug: { type: String, required: true, uppercase: true, maxlength: 1 },
  title: { type: String, required: true },
  labels: {},
  tags: {},
  body: { type: String },
  createdAt: { type: Date },
  updatedAt: { type: Date },
  deletedAt: { type: Date },
});

const WordModel = mongoose.model("Word", WordSchema);

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);

  const dbWords = await WordModel.find({ deletedAt: null }).exec();
  const mdWords = runner(ROOT);

  // 이걸 normalize 해야한다.
  // const dbWordTable = dbWords.map((dbWord) => dbWord.title);

  const dbWordTable = dbWords.reduce<Map<string, any>>((map, next) => {
    const { _id, slug, title: key, labels, tags, body } = next;
    const value = {
      _id,
      slug,
      labels,
      tags,
      body,
    };
    map.set(key, value);
    return map;
  }, new Map());

  const mdWordTitles = [];
  const mdWordTable = mdWords.reduce<Map<string, any>>((map, next) => {
    const [[key, value]] = Object.entries(next);
    map.set(key, value);
    mdWordTitles.push(key);
    return map;
  }, new Map());

  await Promise.all(
    mdWordTitles.map(async (mdTitle) => {
      const dbWord = dbWordTable.get(mdTitle);
      const { slug, title, labels, tags, body, createdAt } =
        mdWordTable.get(mdTitle);

      if (!dbWord) {
        await new WordModel({
          slug,
          title,
          labels,
          tags,
          body,
          createdAt,
        }).save();

        console.log(`${title} is registered`);
      }
    })
  );

  //     // if (!mdWordTable.has(dbTitle)) {
  //     //   await new WordModel({
  //     //     slug,
  //     //     title,
  //     //     labels,
  //     //     tags,
  //     //     body,
  //     //     createdAt: new Date(),
  //     //   }).save();
  //     // }
  //     //
  //   })
  // );

  console.log("MONGO LOCKED 🔒");
  await mongoose.disconnect();
}

main();
