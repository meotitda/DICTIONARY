import { PickType } from '@nestjs/swagger';
import { WordDto } from './word.dto';

export class InputGetWordDto extends PickType(WordDto, ['title'] as const) {}
