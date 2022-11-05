import { OmitType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { IsArrayOfObjects } from 'src/decorators/nested-dto.decorator';
import { Tag, WordDto } from './word-dto';

export class CreateWordDto extends OmitType(WordDto, [
  'updatedAt',
  'deletedAt',
] as const) {
  @IsArrayOfObjects()
  @ValidateNested()
  @Type(() => Tag)
  tags: Tag[];
}
