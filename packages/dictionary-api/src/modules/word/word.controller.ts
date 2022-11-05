import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { Word } from 'src/schemas/word.schema';
import { CreateWordDto } from './dtos/create-word-dto';
import { WordService } from './word.service';

@Controller('words')
export class WordController {
  constructor(private readonly wordService: WordService) {}

  @Post()
  async createWord(@Res() response, @Body() input: CreateWordDto) {
    console.log(input);
    const newWord = await this.wordService.createWord(input);
    return response.status(HttpStatus.CREATED).json({
      newWord,
    });
  }

  @Get()
  async getWords(@Res() response) {
    const words = await this.wordService.getWords();
    return response.status(HttpStatus.OK).json({
      words,
    });
  }

  @Get('/:title')
  async getWord(@Res() response, @Param('title') title) {
    const word = await this.wordService.getWord(title);
    return response.status(HttpStatus.OK).json({
      word,
    });
  }

  @Delete('/:title')
  async deleteWord(@Res() response, @Param('title') title) {
    const deletedWord = await this.wordService.deleteWord(title);
    return response.status(HttpStatus.OK).json({
      deletedWord,
    });
  }
}
