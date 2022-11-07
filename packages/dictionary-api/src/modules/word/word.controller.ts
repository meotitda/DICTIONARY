import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
} from '@nestjs/common';
import { ResultDto } from 'src/common/common.dto';
import { Word } from 'src/schemas/word.schema';
import { InputCreateWordDto } from './dtos/create-word.dto';
import { WordService } from './word.service';

@Controller('words')
export class WordController {
  constructor(private readonly wordService: WordService) {}

  @Post()
  @HttpCode(201)
  async createWord(
    @Body() input: InputCreateWordDto,
  ): Promise<ResultDto<Word>> {
    const result = await this.wordService.createWord(input);

    return result;
  }

  @Get()
  @HttpCode(200)
  async getWords(): Promise<ResultDto<Word[]>> {
    const result = await this.wordService.getWords();

    return result;
  }

  @Get('/:title')
  @HttpCode(200)
  async getWord(@Param('title') title): Promise<ResultDto<Word>> {
    console.log(title);
    console.log(typeof title);
    const result = await this.wordService.getWord(title);

    return result;
  }

  @Delete('/:title')
  @HttpCode(200)
  async deleteWord(@Param('title') title): Promise<ResultDto<Word>> {
    const result = await this.wordService.deleteWord(title);

    return result;
  }
}
