import runner from "./runner";
import mongoose from "mongoose";
import { ITag, IWord, TLabel } from "../dictionary-core/types";
import dotenv from "dotenv";
dotenv.config();

const ROOT = "../../";
const DIFF = {
  LABELS: "labels",
  TAGS: "tags",
  BODY: "body",
};

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
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    const dbWords = await WordModel.find({ deletedAt: null }).exec();
    const mdWords = runner(ROOT);
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
        const { slug, title, labels, tags, body } = mdWordTable.get(mdTitle);

        if (!dbWord) {
          await new WordModel({
            slug,
            title,
            labels,
            tags,
            body,
            createdAt: new Date(),
          }).save();

          console.log(`${title} is registered`);
        } else {
          const { labels: dbLabels, tags: dbTags, body: dbBody } = dbWord;

          const diff = {};
          if (JSON.stringify(labels) !== JSON.stringify(dbLabels)) {
            diff[DIFF.LABELS] = labels;
          }
          if (JSON.stringify(tags) !== JSON.stringify(dbTags)) {
            diff[DIFF.TAGS] = tags;
          }
          if (body !== dbBody) {
            diff[DIFF.BODY] = body;
          }

          if (Object.keys(diff).length > 0) {
            await WordModel.findOneAndUpdate(
              { title },
              {
                labels: diff[DIFF.LABELS] || dbLabels,
                tags: diff[DIFF.TAGS] || dbTags,
                body: diff[DIFF.BODY] || dbBody,
                updatedAt: new Date(),
              }
            ).exec();
          }
        }
      })
    );
  } catch (error) {
    throw new Error(error);
  } finally {
    await mongoose.disconnect();
  }
}

main();
