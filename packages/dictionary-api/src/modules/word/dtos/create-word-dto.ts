import { CommonDto } from 'src/common/common.dto';
import {
  IsString,
  IsNotEmpty,
  IsArray,
  IsOptional,
  IsEnum,
  ValidateNested,
  Length,
} from 'class-validator';
import { ELabel, ITag, TLabel } from '@dictionary/core/types';
import { Type } from 'class-transformer';
import { IsArrayOfObjects } from 'src/decorators/nested-dto.decorator';

class Tag implements ITag {
  @IsString()
  title: string;

  @IsString()
  link: string;
}

export class CreateWordDto extends CommonDto {
  @IsNotEmpty()
  @IsString()
  @Length(1)
  slug: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsArray()
  @IsEnum(ELabel, { each: true })
  labels: TLabel[];

  @IsOptional()
  @IsArray()
  @IsArrayOfObjects()
  @ValidateNested()
  @Type(() => Tag)
  tags: Tag[];

  @IsNotEmpty()
  @IsString()
  body: string;
}
