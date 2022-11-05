import { ITag, IWord, TLabel } from '@dictionary/core/types';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CommonSchema } from 'src/common/common.schema';
import { Tag } from 'src/modules/word/dtos/word-dto';

export type WordDocument = Word & Document;

@Schema()
export class Word extends CommonSchema implements IWord {
  @Prop({ type: String, required: true, uppercase: true, maxlength: 1 })
  slug: string;

  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: Array })
  labels: TLabel[];

  @Prop({ type: Array })
  tags: ITag[];

  @Prop({ type: String })
  body: string;
}

const WordSchema = SchemaFactory.createForClass(Word);
WordSchema.index({ title: 1, deletedAt: 1 }, { unique: true });

export { WordSchema };
