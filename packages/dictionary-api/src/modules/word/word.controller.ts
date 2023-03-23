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
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ControllerResultDto } from 'src/common/common.dto';
import { HttpStatusMessage } from 'src/common/constants/message.constant';
import { Word } from 'src/schemas/word.schema';
import { InputCreateWordDto } from './dtos/create-word.dto';
import { InputDeleteWordDto } from './dtos/delete-word.dto';
import { ResultWordDto } from './dtos/get-word.dto';
import { InputGetWordFilterDto, ResultWordsDto } from './dtos/get-words.dto';
import { WordService } from './word.service';

@Controller('words')
@ApiTags('Word API')
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
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: '단어 목록 조회',
    description: '필터 옵션과 함께 단어 목록을 조회합니다.',
  })
  @ApiResponse({
    type: ResultWordsDto,
    status: HttpStatus.OK,
    description: '게시글 객체 목록 반환',
  })
  @ApiBody({
    type: InputGetWordFilterDto,
    required: false,
  })
  async getWords(
    @Query() input: InputGetWordFilterDto,
  ): Promise<ResultWordsDto> {
    const { items } = await this.wordService.getWords(input);
    const statusCode = items.length < 1 ? HttpStatus.NO_CONTENT : HttpStatus.OK;
    const message = HttpStatusMessage[statusCode];

    const result = { items, statusCode, message };
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
