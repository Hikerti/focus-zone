import {Body, Controller, Get, HttpCode, HttpStatus, Post, Req, Res} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { UserCreateDto } from 'src/user/dto/UserCreateDto.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {};

    @Post('register')
    @HttpCode(HttpStatus.OK)
    register(@Res({ passthrough: true }) res: Response, @Body() dto: UserCreateDto) {
        return this.authService.register(res, dto);
    }

    @Post('login')
    @HttpCode(HttpStatus.OK)
    login(@Res({ passthrough: true }) res: Response, @Body() dto: LoginDto) {
        return this.authService.login(res, dto);
    }

    @Post('logout')
    @HttpCode(HttpStatus.OK)
    logout(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
        return this.authService.logout(req, res);
    }

    @Post('refresh')
    @HttpCode(HttpStatus.OK)
    refresh(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
        return this.authService.refreshToken(req, res);
    }

    @Get('me')
    @HttpCode(HttpStatus.OK)
    me(@Req() req: Request) {
        return this.authService.me(req);
    }
}
