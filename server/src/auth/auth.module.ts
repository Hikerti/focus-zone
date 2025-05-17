import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { ConfigService } from '@nestjs/config';
import {RedisModule} from "../redis/redis.module";

const config = new ConfigService()

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: config.getOrThrow("COOKIE_SECRET"),
      signOptions: { expiresIn: '1h' },
    }),
    UserModule,
      RedisModule
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [PassportModule]
})
export class AuthModule {}
