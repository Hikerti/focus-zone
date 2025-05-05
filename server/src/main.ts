import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as session from 'express-session';
import * as connectRedis from 'connect-redis';
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

  app.use(cookieParser());

  const redisClient = new Redis({
    host: config.getOrThrow<string>('REDIS_HOST'),
    port: config.getOrThrow<number>('REDIS_PORT'),
    db: 0,
  })

  app.use(
    session({
      store: new connectRedis.RedisStore({ client: redisClient }),
      name: config.getOrThrow<string>('SESSION_NAME'),
      secret: config.getOrThrow<string>('COOKIE_SECRET'),
      resave: true,
      cookie: {
        httpOnly: config.getOrThrow<boolean>('SESSION_HTTP_ONLY'),
        secure: config.getOrThrow<boolean>('SESSION_SECURE'),
        maxAge: 3600000, 
        sameSite: "lax",
        domain: "localhost"
      },
    }),
  );

  app.use((req, res, next) => {
    console.log('Текущая сессия:', req.session);
    next();
  });

  app.enableCors({
    origin: config.getOrThrow<string>('USER_URL'),
    credentials: true,               
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  });

  const httpAdapter = app.getHttpAdapter();
  if (httpAdapter instanceof ExpressAdapter) {
    const instance = httpAdapter.getInstance();
    instance.set('REDIS_CLIENT', redisClient);
  }

  await app.listen(config.getOrThrow<number>('SERVER_PORT') ?? 3000);
  console.log(config.getOrThrow<number>('SERVER_PORT'))
}
bootstrap();
