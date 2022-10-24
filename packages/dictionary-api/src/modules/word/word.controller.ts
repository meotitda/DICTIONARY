import { Controller, Get } from '@nestjs/common';
import { WordService } from './word.service';

@Controller('words')
export class WordController {
  constructor(private readonly wordService: WordService) {}

  @Get()
  getWords() {
    return this.wordService.getWords();
  }
}
