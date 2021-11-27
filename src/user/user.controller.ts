import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/')
  getAll() {
    return this.userService.findAll();
  }

  @Post('/')
  create(@Body() body: CreateUserDto) {
    console.log(body);
    return this.userService.create(body);
  }
}
