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

import { CaretakerService } from './caretaker.service';
import { CreateCaretakerDto } from './dto/create-caretaker.dto';
import { UpdateCaretakerDto } from './dto/update-caretaker.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
@ApiTags('caretaker')
@Controller('caretaker')
export class CaretakerController {
  constructor(private readonly caretakerService: CaretakerService) {}

  @Post()
  create(@Body() body: CreateCaretakerDto) {
    return this.caretakerService.create(body);
  }

  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'orderBy', required: false })
  @Get()
  findAll(@Query() query?) {
    return this.caretakerService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.caretakerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateCaretakerDto) {
    return this.caretakerService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.caretakerService.remove(+id);
  }
}