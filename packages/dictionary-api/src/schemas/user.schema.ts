import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CommonSchema } from 'src/common/common.schema';

export type WordDocument = Word & Document;

@Schema()
export class Word extends CommonSchema {
  @Prop()
  title: string;

  @Prop()
  text: string;

  @Prop()
  labels: string[];

  @Prop()
  tags: string[];

  @Prop()
  medias: string[];
}

export const WordSchema = SchemaFactory.createForClass(Word);
