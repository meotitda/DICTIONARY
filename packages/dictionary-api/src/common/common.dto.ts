import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class SwaggerResponseDto<T> {
  @ApiProperty()
  httpStatus: HttpStatus;

  @ApiProperty()
  message: string;

  @ApiProperty()
  items: T;
}

export interface ServiceResultDto<T> {
  items: T;
}
