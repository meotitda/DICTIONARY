import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InputGetWordDto } from './dtos/get-word.dto';
import { ServiceResultDto } from 'src/common/common.dto';
import { InputCreateWordDto } from './dtos/create-word.dto';
import { InputDeleteWordDto } from './dtos/delete-word.dto';
import { InputGetWordFilterDto } from './dtos/get-words.dto';
import { Word, WordDocument } from 'src/schemas/word.schema';

@Injectable()
export class WordService {
  constructor(
    @InjectModel(Word.name) private readonly wordModel: Model<WordDocument>,
  ) {}

  async createWord(input: InputCreateWordDto): Promise<ServiceResultDto<Word>> {
    const word = new this.wordModel(input);
    await word.save();

    const result = { items: word };
    return result;
  }

  async getWords(
    input: InputGetWordFilterDto,
  ): Promise<ServiceResultDto<Word[]>> {
    // TODO paging
    const query = { deletedAt: null };
    const { title, labels } = input;

    if (title) {
      const regex = new RegExp(`^${title}.*`, 'i');
      query['title'] = { $regex: regex };
    }
    if (labels) query['labels'] = { $in: labels };

    const words = await this.wordModel.find(query).exec();
    const result = { items: words };

    return result;
  }

  /**
   *
   * @param {string} input title
   * @returns {Word} Word
   */
  async getWord(input: InputGetWordDto): Promise<ServiceResultDto<Word>> {
    const { title } = input;
    const word = await this.wordModel
      .findOne({ title, deletedAt: null })
      .exec();

    const result = { items: word };
    return result;
  }

  /**
   * Soft Delete
   * @param {string} input title
   * @returns {Word} Word
   */
  async deleteWord(input: InputDeleteWordDto): Promise<ServiceResultDto<Word>> {
    const { title } = input;
    const word = await this.wordModel
      .findOne({ title, deletedAt: null })
      .exec();

    const result = { items: null };

    if (word) {
      word.deletedAt = new Date();
      await word.save();
      result.items = word;
    }

    return result;
  }
}
