import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as session from 'express-session';
import {RedisStore} from "connect-redis"
import * as Redis from 'ioredis';
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

  const RedisClient = Redis.default;
  const redisClient = new RedisClient({
    host: config.getOrThrow<string>('REDIS_HOST'),
    port: config.getOrThrow<number>('REDIS_PORT')
  })

  const redisStore = new RedisStore({
    client: redisClient,
    prefix: 'sess:',
  });


  app.use(cookieParser())

  app.use(
    session({
      store: redisStore ,
      secret: config.getOrThrow<string>('SESSION_SECRET'),
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: config.getOrThrow<boolean>('SESSION_HTTP_ONLY'),
        secure: config.getOrThrow<boolean>('SESSION_SECURE'),
        maxAge: 24 * 60 * 60 * 1000,
        path: '/', 
      }
    })
  )

  await app.listen(config.getOrThrow<number>('SERVER_PORT') ?? 3000);
  console.log(config.getOrThrow<number>('SERVER_PORT'))
}
bootstrap();
