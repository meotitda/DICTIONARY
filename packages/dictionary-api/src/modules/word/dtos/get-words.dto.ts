import { TLabel } from '@dictionary/core/types';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { SwaggerResponseDto } from 'src/common/common.dto';
import { WordDto } from './word.dto';

class CFilter {
  @ApiProperty()
  labels: TLabel[];
}

export class InputGetWordFilterDto {
  @ApiProperty()
  @IsOptional()
  filter: CFilter;
}

export class ResultWordsDto extends SwaggerResponseDto {
  @ApiProperty({
    type: [WordDto],
  })
  items: WordDto[];
}
