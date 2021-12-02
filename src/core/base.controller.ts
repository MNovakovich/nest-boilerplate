import {
  Body,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { BaseService } from './base.service';
interface BaseControllerInterface {
  getAll: (query: any) => any;
  getById: (id: number) => any;
  create: (body: any) => any;
  update: (id, body) => any;
  delete: (id) => any;
}
export class BaseController<T, CreateDto> implements BaseControllerInterface {
  private model: T | any;
  private createDto: any;
  constructor(model) {
    this.model = model;
  }

  @Get('/')
  getAll(@Query() query: any) {
    return this.model.findAll(query);
  }
  @Get('/:id')
  getById(@Param('id') id: number) {
    return this.model.findOne(id);
  }

  @ApiOperation({ summary: 'Create new user' })
  //@ApiResponse({ status: 201, type: <Model })
  @HttpCode(201)
  @Post('/')
  create(@Body() body) {
    return this.model.create(body);
  }

  @Patch('/:id')
  update(@Param('id') id: number, @Body() body: CreateDto) {
    return this.model.update(id, body);
  }

  @Delete('/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.model.delete(id);
  }
}
