import { TLabel } from '@dictionary/core/types';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { SwaggerResponseDto } from 'src/common/common.dto';
import { WordDto } from './word.dto';

interface IFilter {
  labels: TLabel[];
}
export class InputGetWordFilterDto {
  @IsOptional()
  filter: IFilter;
}

export class ResultWordDto extends SwaggerResponseDto {
  @ApiProperty({
    type: WordDto,
  })
  item: WordDto;
}
