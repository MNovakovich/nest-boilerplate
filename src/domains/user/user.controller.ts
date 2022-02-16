import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly office_userService: UserService) {}

  @Post()
  create(@Body() body: CreateUserDto) {
    return this.office_userService.create(body);
  }

  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'orderBy', required: false })
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Query() query?) {
    return this.office_userService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.office_userService.getById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateUserDto) {
    return this.office_userService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.office_userService.delete(+id);
  }
}
