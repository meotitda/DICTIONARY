import { Module } from '@nestjs/common';
import { WordService } from './word.service';
import { WordController } from './word.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Word, WordSchema } from 'src/schemas/word.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Word.name, schema: WordSchema }]),
  ],
  providers: [WordService],
  controllers: [WordController],
})
export class WordModule {}
