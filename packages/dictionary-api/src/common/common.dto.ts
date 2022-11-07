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

export class SwaggerableResponseDto {
  @ApiProperty()
  message: string;
}
