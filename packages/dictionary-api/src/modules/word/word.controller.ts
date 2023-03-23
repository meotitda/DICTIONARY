import { WordService } from './word.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { InputGetWordDto, OutputGetWordDto } from './dtos/get-word.dto';
import { InputGetWordFilterDto, OutputGetWordsDto } from './dtos/get-words.dto';
import {
  InputCreateWordDto,
  OutputCreateWordsDto,
} from './dtos/create-word.dto';
import {
  InputDeleteWordDto,
  OutputDeleteWordDto,
} from './dtos/delete-word.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { HttpStatusMessage } from 'src/common/constants/message.constant';

@Controller('words')
@ApiTags('Word API')
export class WordController {
  constructor(private readonly wordService: WordService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createWord(
    @Body() input: InputCreateWordDto,
  ): Promise<OutputCreateWordsDto> {
    const { items } = await this.wordService.createWord(input);
    const httpStatus = !items ? HttpStatus.BAD_REQUEST : HttpStatus.OK;
    const message = HttpStatusMessage[httpStatus];

    const result = { items, httpStatus, message };
    return result;
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: '단어 목록 조회',
    description: '필터 옵션과 함께 단어 목록을 조회합니다.',
  })
  @ApiResponse({
    type: OutputGetWordsDto,
    status: HttpStatus.OK,
    description: '게시글 객체 목록 반환',
  })
  async getWords(
    @Query() input: InputGetWordFilterDto,
  ): Promise<OutputGetWordsDto> {
    const { items } = await this.wordService.getWords(input);
    const httpStatus = !items ? HttpStatus.NO_CONTENT : HttpStatus.OK;
    const message = HttpStatusMessage[httpStatus];

    const result = { items, httpStatus, message };
    return result;
  }

  @Get('/:title')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: '단어 조회',
    description: '제목으로 단어를 조회합니다.',
  })
  @ApiResponse({
    type: OutputGetWordDto,
    status: HttpStatus.OK,
    description: '게시글 객체 반환',
  })
  async getWord(@Param() input: InputGetWordDto): Promise<OutputGetWordDto> {
    const { items } = await this.wordService.getWord(input);
    const httpStatus = !items ? HttpStatus.NO_CONTENT : HttpStatus.OK;
    const message = HttpStatusMessage[httpStatus];

    const result = { items, httpStatus, message };
    return result;
  }

  @Delete('/:title')
  @HttpCode(HttpStatus.OK)
  async deleteWord(
    @Param() input: InputDeleteWordDto,
  ): Promise<OutputDeleteWordDto> {
    const { items } = await this.wordService.deleteWord(input);
    const httpStatus = !items ? HttpStatus.NOT_FOUND : HttpStatus.OK;
    const message = HttpStatusMessage[httpStatus];

    const result = { items, httpStatus, message };
    return result;
  }
}
