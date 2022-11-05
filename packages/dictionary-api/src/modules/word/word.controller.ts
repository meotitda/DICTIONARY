import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import {
  InputCreateWordDto,
  OutputCreateWordDto,
} from './dtos/create-word-dto';
import { OutputDeleteDto } from './dtos/delete-word-dto';
import {
  InputGetWordDto,
  OutputGetWordDto,
  OutputGetWordsDto,
} from './dtos/get-word-dto';
import { WordService } from './word.service';

@Controller('words')
export class WordController {
  constructor(private readonly wordService: WordService) {}

  @Post()
  @HttpCode(201)
  async createWord(
    @Body() input: InputCreateWordDto,
  ): Promise<OutputCreateWordDto> {
    const result = await this.wordService.createWord(input);

    return result;
  }

  @Get()
  @HttpCode(200)
  async getWords(): Promise<OutputGetWordsDto> {
    const result = await this.wordService.getWords();

    return result;
  }

  @Get('/:title')
  @HttpCode(200)
  async getWord(@Param('title') title): Promise<OutputGetWordDto> {
    const result = await this.wordService.getWord(title);

    return result;
  }

  @Delete('/:title')
  @HttpCode(200)
  async deleteWord(@Param('title') title): Promise<OutputDeleteDto> {
    const result = await this.wordService.deleteWord(title);

    return result;
  }
}
