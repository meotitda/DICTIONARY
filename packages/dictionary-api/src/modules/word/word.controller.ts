import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Word } from 'src/schemas/user.schema';
import { WordService } from './word.service';

@Controller('words')
export class WordController {
  constructor(private readonly wordService: WordService) {}

  @Post()
  async createWord(@Res() response, @Body() word: Word) {
    const newWord = await this.wordService.createWord(word);
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
}
