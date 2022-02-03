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

import { CaretakerTypeService } from './caretaker_type.service';
import { CreateCaretakerTypeDto } from './dto/create-caretaker_type.dto';
import { UpdateCaretakerTypeDto } from './dto/update-caretaker_type.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
@ApiTags('caretaker_type')
@Controller('caretaker_type')
export class CaretakerTypeController {
  constructor(private readonly caretaker_typeService: CaretakerTypeService) {}

  @Post()
  create(@Body() body: CreateCaretakerTypeDto) {
    return this.caretaker_typeService.create(body);
  }

  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'orderBy', required: false })
  @Get()
  findAll(@Query() query?) {
    return this.caretaker_typeService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.caretaker_typeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateCaretakerTypeDto) {
    return this.caretaker_typeService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.caretaker_typeService.remove(+id);
  }
}