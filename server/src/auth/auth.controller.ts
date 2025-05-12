import {Body, Controller, Get, HttpCode, HttpStatus, Post, Req, Res} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { UserCreateDto } from 'src/user/dto/UserCreateDto.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {};

  // @Get('authenticate')
  // authenticate(@Req() req: Request, res: Response) {
  //     return this.authService.authenticate(req, res);
  // }

  @Post('register')
  @HttpCode(HttpStatus.OK)
  createUser(@Req() req: Request, @Res({passthrough: true}) res: Response, @Body() dto: UserCreateDto) {
    return this.authService.register(res, req, dto)
  }  

  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Body() dto: LoginDto, @Res({passthrough: true}) res: Response,  @Req() req: Request) {
    return this.authService.login(res, req, dto)
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  logout(@Req() req: Request, @Res({passthrough: true}) res: Response) {
    return this.authService.logout(req, res)
  }
}
