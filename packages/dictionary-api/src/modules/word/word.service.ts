import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Word, WordDocument } from 'src/schemas/word.schema';
import {
  InputCreateWordDto,
  OutputCreateWordDto,
} from './dtos/create-word-dto';
import { InputDeleteWordDto, OutputDeleteDto } from './dtos/delete-word-dto';
import { InputGetWordDto, OutputGetWordsDto } from './dtos/get-word-dto';

@Injectable()
export class WordService {
  constructor(@InjectModel(Word.name) private wordModel: Model<WordDocument>) {}

  async createWord(input: InputCreateWordDto): Promise<OutputCreateWordDto> {
    const word = new this.wordModel(input);
    await word.save();

    const result = {
      items: word,
      message: `${word.title} is successfully created`,
    };
    return result;
  }

  async getWords(): Promise<OutputGetWordsDto> {
    // TODO paging
    const words = await this.wordModel.find({ deletedAt: null }).exec();
    const result = {
      items: words,
      message: 'Successfully got words',
    };

    return result;
  }

  /**
   *
   * @param {string} title title
   * @returns {Word} Word
   */
  async getWord(title: InputGetWordDto): Promise<OutputCreateWordDto> {
    const word = await this.wordModel
      .findOne({ title, deletedAt: null })
      .exec();

    const result = {
      items: word,
      message: word ? `Successfully got ${word.title}` : 'No Content',
    };

    return result;
  }

  /**
   * Soft Delete
   * @param {string} title title
   * @returns {Word} Word
   */
  async deleteWord(title: InputDeleteWordDto): Promise<OutputDeleteDto> {
    const word = await this.wordModel
      .findOne({ title, deletedAt: null })
      .exec();

    if (!word) {
      throw new NotFoundException();
    }

    word.updatedAt = new Date();
    await word.save();

    const result = {
      items: word,
      message: `${word.title} is successfully deleted`,
    };

    return result;
  }
}
