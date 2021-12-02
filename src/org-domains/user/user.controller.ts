import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  Req,
} from '@nestjs/common';
import { ApiOperation, ApiTags, ApiResponse } from '@nestjs/swagger';
import { BaseController } from 'src/core/base.controller';
import { CreateRoleDto } from '../role/dto/create-role.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.model';
import { UserService } from './user.service';

@ApiTags('users')
@Controller('users')
export class UserController extends BaseController<User, CreateRoleDto> {
  constructor(private userService: UserService) {
    super(userService);
  }
}
