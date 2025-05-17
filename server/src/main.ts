import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new ConfigService()

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true, 
      transform: true
    })
  )

  app.enableCors({
    origin: config.getOrThrow<string>('USER_URL'),
    credentials: true,               
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  });

  app.use(cookieParser());

  await app.listen(config.getOrThrow<number>('SERVER_PORT') ?? 3000);
  console.log(config.getOrThrow<number>('SERVER_PORT'))
}
bootstrap();
