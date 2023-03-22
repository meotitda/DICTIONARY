import { TLabel } from '@dictionary/core/types';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString } from 'class-validator';
import { SwaggerResponseDto } from 'src/common/common.dto';
import { WordDto } from './word.dto';

export class InputGetWordFilterDto {
  @ApiProperty()
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  labels: TLabel[];
}

export class ResultWordsDto extends SwaggerResponseDto {
  @ApiProperty({
    type: [WordDto],
  })
  items: WordDto[];
}
