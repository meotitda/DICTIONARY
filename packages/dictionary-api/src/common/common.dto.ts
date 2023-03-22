import { ApiProperty } from '@nestjs/swagger';
import { WordDto } from 'src/modules/word/dtos/word.dto';

export class ResultDto {
  @ApiProperty({
    type: WordDto,
  })
  items: WordDto;

  @ApiProperty()
  message: string;
}

export class SwaggerResponseDto {
  @ApiProperty()
  message: string;
}

export interface ControllerResultDto<T> {
  items: T;
  statusCode: number;
  message: string;
}

export interface ServiceResultDto<T> {
  items: T;
}
