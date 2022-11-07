import { PickType } from '@nestjs/swagger';
import { WordDto } from './word.dto';

export class InputDeleteWordDto extends PickType(WordDto, ['title'] as const) {}
