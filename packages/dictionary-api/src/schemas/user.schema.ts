import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CommonSchema } from 'src/common/common.schema';
import { Label } from 'src/constants';

export type WordDocument = Word & Document;

class Media {
  title: string;
  url: string;
  type: string;
}

class Tag {
  title: string;
  url: string;
}
@Schema()
export class Word extends CommonSchema {
  @Prop({ required: true, unique: true })
  title: string;

  @Prop()
  text: string;

  @Prop()
  labels: Label[];

  @Prop()
  tags: Tag[];

  @Prop()
  medias: Media[];
}

export const WordSchema = SchemaFactory.createForClass(Word);
