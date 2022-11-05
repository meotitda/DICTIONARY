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
