import { Inject, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CafeModule } from './cafe/cafe.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { MessageModule } from './message/message.module';
import { DiscountsModule } from './discounts/discounts.module';
import { AchievementModule } from './achievement/achievement.module';


@Module({
  imports: [
    CafeModule, 
    PrismaModule, 
    ConfigModule.forRoot({
      isGlobal: true,
    }), AuthModule, UserModule, MessageModule, DiscountsModule, AchievementModule,
],
  controllers: [AppController],
  providers: [AppService],
})


export class AppModule {}
