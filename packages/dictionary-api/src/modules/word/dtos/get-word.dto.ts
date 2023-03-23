import { PickType } from '@nestjs/swagger';
import { SwaggerResponseDto } from 'src/common/common.dto';
import { WordDto } from './word.dto';

export class InputGetWordDto extends PickType(WordDto, ['title'] as const) {}
export class OutputGetWordDto extends SwaggerResponseDto<WordDto> {}
