import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
} from '@nestjs/common';
import { ControllerResultDto } from 'src/common/common.dto';
import { Word } from 'src/schemas/word.schema';
import { InputCreateWordDto } from './dtos/create-word.dto';
import { InputDeleteWordDto } from './dtos/delete-word.dto';
import { InputGetWordDto } from './dtos/get-word.dto';
import { WordService } from './word.service';

@Controller('words')
export class WordController {
  constructor(private readonly wordService: WordService) {}

  @Post()
  @HttpCode(201)
  async createWord(
    @Body() input: InputCreateWordDto,
  ): Promise<ControllerResultDto<Word>> {
    const { items } = await this.wordService.createWord(input);

    const result = {
      items,
      statusCode: 200,
      message: `${items.title} is successfully created`,
    };

    return result;
  }

  @Get()
  @HttpCode(200)
  async getWords(): Promise<ControllerResultDto<Word[]>> {
    const { items } = await this.wordService.getWords();

    const result = {
      items,
      statusCode: 200,
      message: 'Successfully got words',
    };

    return result;
  }

  @Get('/:title')
  @HttpCode(200)
  async getWord(
    @Param() param: InputGetWordDto,
  ): Promise<ControllerResultDto<Word>> {
    const { items } = await this.wordService.getWord(param);

    const result = {
      items,
      statusCode: 200,
      message: items ? `Successfully got ${items.title}` : 'No Content',
    };

    return result;
  }

  @Delete('/:title')
  @HttpCode(200)
  async deleteWord(
    @Param() param: InputDeleteWordDto,
  ): Promise<ControllerResultDto<Word>> {
    const { items } = await this.wordService.deleteWord(param);

    const result = {
      items,
      statusCode: 200,
      message: `${items.title} is successfully deleted`,
    };

    return result;
  }
}
