import { OmitType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ResultDto } from 'src/common/common.dto';
import { IsArrayOfObjects } from 'src/decorators/nested-dto.decorator';
import { Word } from 'src/schemas/word.schema';
import { Tag, WordDto } from './word-dto';

export class InputCreateWordDto extends OmitType(WordDto, [
  'updatedAt',
  'deletedAt',
] as const) {
  @IsArrayOfObjects()
  @ValidateNested()
  @Type(() => Tag)
  tags: Tag[];
}

export class OutputCreateWordDto implements ResultDto {
  items: Word;
  message: string;
}
