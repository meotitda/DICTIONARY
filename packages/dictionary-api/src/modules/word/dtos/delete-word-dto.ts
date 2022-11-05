import { PickType } from '@nestjs/swagger';
import { ResultDto } from 'src/common/common.dto';
import { Word } from 'src/schemas/word.schema';
import { WordDto } from './word-dto';

export class InputDeleteWordDto extends PickType(WordDto, ['title'] as const) {}

export class OutputDeleteDto implements ResultDto {
  items: Word;
  message: string;
}
