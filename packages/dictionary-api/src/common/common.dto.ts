import { IsDate, IsOptional } from 'class-validator';

export class DateDto {
  @IsDate()
  @IsOptional()
  createdAt: Date;

  @IsDate()
  @IsOptional()
  updatedAt: Date;

  @IsDate()
  @IsOptional()
  deletedAt: Date;
}

export interface ResultDto {
  items: any;
  message: string;
}
