import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class GetWordsDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  slug: string;
}
