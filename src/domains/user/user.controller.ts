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
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiTags, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../auth/roles-auth.decorator';
import { RolesGuard } from '../auth/roles.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.model';
import { UserService } from './user.service';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Roles('admin')
  @UseGuards(RolesGuard)
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 2000, type: [User] })
  @Get('/')
  getAll(@Query() query: any) {
    // const query = { page: 1 };
    console.log(query);
    return this.userService.findAll(query);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Get userBy Id' })
  @ApiResponse({ status: 2000, type: User })
  @Get('/:id')
  getById(@Param('id') id: string) {
    // const query = { page: 1 };

    return this.userService.getById(+id);
  }

  @ApiOperation({ summary: 'Create new user' })
  @ApiResponse({ status: 201, type: User })
  @HttpCode(201)
  @Post('/')
  create(@Body() body: CreateUserDto) {
    return this.userService.create(body);
  }

  @Patch('/:id')
  update(@Param('id') id: number, @Body() body: UpdateUserDto) {
    return this.userService.update(id, body);
  }

  @Delete('/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }

  @Get('/change-role/user/:userId/role/:roleId')
  changeUserRole(@Param() params: { roleId: string; userId: string }) {
    return this.userService.changeRole(params);
  }
}
