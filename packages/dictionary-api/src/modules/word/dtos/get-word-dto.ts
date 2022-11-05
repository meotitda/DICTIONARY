import { PickType } from '@nestjs/swagger';
import { ResultDto } from 'src/common/common.dto';
import { Word } from 'src/schemas/word.schema';
import { WordDto } from './word-dto';

export class InputGetWordDto extends PickType(WordDto, ['title'] as const) {}

export class OutputGetWordDto implements ResultDto {
  items: Word;
  message: string;
}

export class OutputGetWordsDto implements ResultDto {
  items: Word[];
  message: string;
}
