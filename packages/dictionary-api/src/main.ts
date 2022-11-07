import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import serverlessExpress from '@vendia/serverless-express';
import { Callback, Context, Handler } from 'aws-lambda';
import { AppModule } from './app.module';

const CONFIG = Object.freeze({
  PORT: process.env.PORT || 3000,
  NEST_ENV: process.env.NEST_ENV,
});

let server: Handler;

async function bootstrap(): Promise<Handler> {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  if (CONFIG.NEST_ENV === 'dev') {
    const config = new DocumentBuilder()
      .setTitle('DICTIONARY OFFICAIL API')
      .setDescription('딕셔너리 공식 API 문서입니다.')
      .setVersion('1.0')
      .addTag('dictionary')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(CONFIG.PORT);
  } else {
    await app.init();
    const expressApp = app.getHttpAdapter().getInstance();
    return serverlessExpress({ app: expressApp });
  }
}

if (CONFIG.NEST_ENV === 'dev') {
  bootstrap();
}

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  server = server ?? (await bootstrap());
  return server(event, context, callback);
};
