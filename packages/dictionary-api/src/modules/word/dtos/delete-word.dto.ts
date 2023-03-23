import { PickType } from '@nestjs/swagger';
import { SwaggerResponseDto } from 'src/common/common.dto';
import { WordDto } from './word.dto';

export class InputDeleteWordDto extends PickType(WordDto, ['title'] as const) {}
export class OutputDeleteWordDto extends SwaggerResponseDto<WordDto> {}
