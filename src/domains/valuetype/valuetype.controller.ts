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

import { ValuetypeService } from './valuetype.service';
import { CreateValuetypeDto } from './dto/create-valuetype.dto';
import { UpdateValuetypeDto } from './dto/update-valuetype.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
@ApiTags('valuetype')
@Controller('valuetype')
export class ValuetypeController {
  constructor(private readonly valuetypeService: ValuetypeService) {}

  @Post()
  create(@Body() body: CreateValuetypeDto) {
    return this.valuetypeService.create(body);
  }

  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'orderBy', required: false })
  @Get()
  findAll(@Query() query?) {
    return this.valuetypeService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.valuetypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateValuetypeDto) {
    return this.valuetypeService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.valuetypeService.remove(+id);
  }
}
