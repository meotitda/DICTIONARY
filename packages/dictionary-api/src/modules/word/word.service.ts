import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Word, WordDocument } from 'src/schemas/word.schema';
import { CreateWordDto } from './dtos/create-word-dto';

@Injectable()
export class WordService {
  constructor(@InjectModel(Word.name) private wordModel: Model<WordDocument>) {}

  async createWord(input: CreateWordDto): Promise<Word> {
    const newWord = new this.wordModel(input);
    return newWord.save();
  }

  async getWords(): Promise<Word[]> {
    return await this.wordModel.find({ deletedAt: null }).exec();
  }

  /**
   *
   * @param {string} title title
   * @returns {Word} Word
   */
  async getWord(title): Promise<Word> {
    return await this.wordModel.findOne({ title, deletedAt: null }).exec();
  }

  /**
   * Soft Delete
   * @param {string} title title
   * @returns {Word} Word
   */
  async deleteWord(title): Promise<any> {
    return await this.wordModel.findOneAndUpdate(
      { title },
      { deletedAt: new Date() },
      { new: true },
    );
  }
}
