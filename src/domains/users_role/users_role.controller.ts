import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';

import { UsersRoleService } from './users_role.service';
import { CreateUsersRoleDto } from './dto/create-users_role.dto';
import { UpdateUsersRoleDto } from './dto/update-users_role.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
@ApiTags('users_role')
@Controller('users_role')
export class UsersRoleController {
  constructor(private readonly users_roleService: UsersRoleService) {}

  @Post()
  create(@Body() body: CreateUsersRoleDto) {
    return this.users_roleService.create(body);
  }

  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'orderBy', required: false })
  @Get()
  findAll(@Query() query?) {
    return this.users_roleService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.users_roleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateUsersRoleDto) {
    return this.users_roleService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.users_roleService.remove(+id);
  }
}
