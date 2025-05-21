import {Module} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { MessageModule } from './message/message.module';
import { DiscountsModule } from './discounts/discounts.module';
import { AchievementModule } from './achievement/achievement.module';
import { RedisModule } from './redis/redis.module';
import {JwtModule} from "@nestjs/jwt";
import { PlacesModule } from './places/places.module';


@Module({
  imports: [
    PrismaModule, 
    ConfigModule.forRoot({
      isGlobal: true,
    }),
      JwtModule.register({
          secret: 'defaultSecret',
          signOptions: { expiresIn: '60s' },
      }),
      AuthModule, UserModule, MessageModule, DiscountsModule, AchievementModule, RedisModule, PlacesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})


export class AppModule {}
