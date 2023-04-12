import { SwaggerResponseDto } from 'src/common/common.dto';
import { WordDto } from './word.dto';

export class InputCreateWordDto extends WordDto {}
export class OutputCreateWordsDto extends SwaggerResponseDto<WordDto> {}
