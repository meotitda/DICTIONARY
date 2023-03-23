import { TLabel } from '@dictionary/core/types';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString } from 'class-validator';
import { SwaggerResponseDto } from 'src/common/common.dto';
import { WordDto } from './word.dto';

export class InputGetWordFilterDto {
  @ApiPropertyOptional({ description: 'Adapter' })
  @IsOptional()
  @IsString()
  title: TLabel[];

  @ApiPropertyOptional({ description: '[Common]' })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  labels: TLabel[];
}

export class OutputGetWordsDto extends SwaggerResponseDto<WordDto[]> {}
