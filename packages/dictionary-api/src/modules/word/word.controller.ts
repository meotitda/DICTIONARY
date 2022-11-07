import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ResultDto } from 'src/common/common.dto';
import { InputCreateWordDto } from './dtos/create-word.dto';
import { InputGetWordDto, ResultWordDto } from './dtos/get-word.dto';
import { WordService } from './word.service';

@Controller('words')
@ApiTags('Word API')
export class WordController {
  constructor(private readonly wordService: WordService) {}

  @Post()
  @HttpCode(201)
  async createWord(@Body() input: InputCreateWordDto): Promise<ResultDto> {
    const result = await this.wordService.createWord(input);

    return result;
  }

  @Get()
  @HttpCode(200)
  async getWords(): Promise<ResultDto> {
    const result = await this.wordService.getWords();

    return result;
  }

  @Get(':title')
  @HttpCode(200)
  @ApiOperation({
    summary: '단어 조회',
    description: '제목으로 단어를 조회합니다.',
  })
  @ApiResponse({
    type: ResultWordDto,
    status: HttpStatus.OK,
    description: '게시글 객체 반환',
  })
  async getWord(@Param('title') title: string): Promise<ResultWordDto> {
    const result = await this.wordService.getWord(title);

    return result;
  }

  @Delete('/:title')
  @HttpCode(200)
  async deleteWord(@Param('title') title): Promise<ResultDto> {
    const result = await this.wordService.deleteWord(title);

    return result;
  }
}
