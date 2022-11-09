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
import { ApiProperty } from '@nestjs/swagger';

export class WordDto {
  @IsNotEmpty()
  @IsString()
  @Length(1)
  @ApiProperty()
  slug: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  title: string;

  @IsOptional()
  @IsArray()
  @IsEnum(ELabel, { each: true })
  @ApiProperty()
  labels: TLabel[];

  @IsOptional()
  @IsArray()
  @IsArrayOfObjects()
  @ValidateNested()
  @Type(() => Tag)
  @ApiProperty()
  tags: Tag[];

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  body: string;
}

export class Tag implements ITag {
  @IsString()
  title: string;

  @IsString()
  link: string;
}
