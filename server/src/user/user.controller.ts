import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateDto } from './dto/UserCreateDto.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  create(@Body() dto: UserCreateDto) {
    return this.userService.create(dto)
  }

  @Get('get_user/:id')
  getUserById(@Param('id') id: string) {
    return this.userService.getUserById(id)
  }
  @Get('get_user/:email')
  getUserByEmail(@Param('email') email: string) {
    return this.userService.getUserByEmail(email)
  }

  @Get('get_users')
  getUsers() {
    return this.userService.getUsers()
  }
}
