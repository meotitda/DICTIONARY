import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Word, WordDocument } from 'src/schemas/user.schema';

@Injectable()
export class WordService {
  constructor(@InjectModel(Word.name) private wordModel: Model<WordDocument>) {}

  async createWord(word: Word): Promise<Word> {
    const newWord = new this.wordModel(word);
    return newWord.save();
  }

  async getWords(): Promise<Word[]> {
    return await this.wordModel.find().exec();
  }
}
