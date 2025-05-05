import { Body, Controller, HttpCode, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { UserCreateDto } from 'src/user/dto/UserCreateDto.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @HttpCode(HttpStatus.OK)
  createUser(@Req() req: Request, @Body() dto: UserCreateDto) {
    return this.authService.register(req, dto)
  }  

  @Post('login')
  login(@Body() dto: LoginDto, @Req() req: Request) {
    return this.authService.login(req, dto)
  }

  @Post('logout')
  logout(@Req() req: Request, @Res({passthrough: true}) res: Response) {
    return this.authService.logout(req, res)
  }
}
