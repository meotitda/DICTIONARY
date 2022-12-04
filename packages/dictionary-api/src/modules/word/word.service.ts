import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ServiceResultDto } from 'src/common/common.dto';
import { Word, WordDocument } from 'src/schemas/word.schema';
import { InputCreateWordDto } from './dtos/create-word.dto';
import { InputDeleteWordDto } from './dtos/delete-word.dto';
import { InputGetWordDto, ResultWordDto } from './dtos/get-word.dto';
import { InputGetWordFilterDto } from './dtos/get-words.dto';

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
    const { filter } = input;
    const labels = filter?.labels;

    if (labels) query['labels'] = { $in: labels };

    const words = await this.wordModel.find(query).exec();
    const result = { items: words };

    return result;
  }

  /**
   *
   * @param {string} title title
   * @returns {Word} Word
   */
  async getWord(title: string): Promise<ResultWordDto> {
    const word = await this.wordModel
      .findOne({ title, deletedAt: null })
      .exec();

    const result = {
      item: word,
      message: word ? `Successfully got ${word.title}` : 'No Content',
    };

    return result;
  }

  /**
   * Soft Delete
   * @param {string} title title
   * @returns {Word} Word
   */
  async deleteWord({
    title,
  }: InputDeleteWordDto): Promise<ServiceResultDto<Word>> {
    const word = await this.wordModel
      .findOne({ title, deletedAt: null })
      .exec();
    console.log('hit');
    if (!word) {
      throw new NotFoundException();
    }

    word.deletedAt = new Date();
    await word.save();

    const result = { items: word };

    return result;
  }
}
