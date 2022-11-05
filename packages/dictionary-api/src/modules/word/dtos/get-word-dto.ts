import { PickType } from '@nestjs/swagger';
import { ResultDto } from 'src/common/common.dto';
import { Word } from 'src/schemas/word.schema';
import { WordDto } from './word-dto';

export class InputGetWordDto extends PickType(WordDto, ['title'] as const) {}

export class OutputGetWordDto extends ResultDto {
  items: Word;
  message: string;
}

export class OutputGetWordsDto extends ResultDto {
  items: Word[];
  message: string;
}