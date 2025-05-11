import { Inject, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CafeModule } from './cafe/cafe.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { MessageModule } from './message/message.module';


@Module({
  imports: [
    CafeModule, 
    PrismaModule, 
    ConfigModule.forRoot({
      isGlobal: true,
    }), AuthModule, UserModule, MessageModule,
],
  controllers: [AppController],
  providers: [AppService],
})


export class AppModule {}
