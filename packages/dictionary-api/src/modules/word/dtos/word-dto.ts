import {
  IsString,
  IsNotEmpty,
  IsArray,
  IsOptional,
  IsEnum,
  Length,
} from 'class-validator';
import { ELabel, ITag, TLabel } from '@dictionary/core/types';

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
  tags: ITag[];

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
