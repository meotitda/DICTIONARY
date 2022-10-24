import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class CommonSchema {
  @Prop({ required: true, default: new Date() })
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop()
  deletedAt: Date;
}
