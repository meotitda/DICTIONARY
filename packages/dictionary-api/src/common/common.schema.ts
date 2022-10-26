import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class CommonSchema {
  @Prop({ type: Date, required: true, default: Date.now })
  createdAt: Date;

  @Prop({ type: Date })
  updatedAt: Date;

  @Prop({ type: Date })
  deletedAt: Date;
}
