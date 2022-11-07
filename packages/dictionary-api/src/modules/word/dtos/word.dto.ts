import {
  IsString,
  IsNotEmpty,
  IsArray,
  IsOptional,
  IsEnum,
  Length,
  ValidateNested,
} from 'class-validator';
import { ELabel, ITag, TLabel } from '@dictionary/core';
import { IsArrayOfObjects } from 'src/decorators/nested-dto.decorator';
import { Type } from 'class-transformer';

export class WordDto {
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

export class Tag implements ITag {
  @IsString()
  title: string;

  @IsString()
  link: string;
}
