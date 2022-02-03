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

import { OfficeUserService } from './office_user.service';
import { CreateOfficeUserDto } from './dto/create-office_user.dto';
import { UpdateOfficeUserDto } from './dto/update-office_user.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
@ApiTags('office_user')
@Controller('office_user')
export class OfficeUserController {
  constructor(private readonly office_userService: OfficeUserService) {}

  @Post()
  create(@Body() body: CreateOfficeUserDto) {
    return this.office_userService.create(body);
  }

  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'orderBy', required: false })
  @Get()
  findAll(@Query() query?) {
    return this.office_userService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.office_userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateOfficeUserDto) {
    return this.office_userService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.office_userService.remove(+id);
  }
}