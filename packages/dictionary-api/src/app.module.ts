import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WordModule } from './modules/word/word.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>('MONGODB_URI'),
      }),
    }),
    WordModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
