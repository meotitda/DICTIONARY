import { CommonDto } from 'src/common/common.dto';
import {
  IsString,
  IsNotEmpty,
  IsArray,
  IsOptional,
  IsEnum,
} from 'class-validator';
import { ELabel, ITag, TLabel } from '@dictionary/core/types';
import { Type } from 'class-transformer';

export class Tag implements ITag {
  title: string;
  link: string;
}

export class CreateWordDto extends CommonDto {
  @IsNotEmpty()
  @IsString()
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
  @Type(() => Tag)
  tags: Tag[];

  @IsNotEmpty()
  @IsString()
  body: string;
}
