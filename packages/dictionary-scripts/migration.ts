import runner from "./runner";
import mongoose from "mongoose";
import { ITag, IWord, TLabel } from "../dictionary-core/types";

import dotenv from "dotenv";
dotenv.config();

const ROOT = "../../";

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
  const mdWords = await runner(ROOT);

  const dbWordTitles = dbWords.map((dbWord) => dbWord.title);

  for (const mdWord of mdWords) {
    const key = Object.keys(mdWord)[0];
    const { slug, title, labels, tags, body } = mdWord[key];

    if (!dbWordTitles.includes(title)) {
      await new WordModel({
        slug,
        title,
        labels,
        tags,
        body,
        createdAt: new Date(),
      }).save();

      console.log(`✅ ${title} is registered`);
    }
  }

  console.log("🚀 Words successfully migrated");

  await mongoose.disconnect();
}

main().catch((err) => console.log(err));
