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
import { ControllerResultDto } from 'src/common/common.dto';
import { Word } from 'src/schemas/word.schema';
import { InputCreateWordDto } from './dtos/create-word.dto';
import { InputDeleteWordDto } from './dtos/delete-word.dto';
import { ResultWordDto } from './dtos/get-word.dto';
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
