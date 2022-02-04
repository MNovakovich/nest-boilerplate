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

import { IndicaorValueService } from './indicaor_value.service';
import { CreateIndicaorValueDto } from './dto/create-indicaor_value.dto';
import { UpdateIndicaorValueDto } from './dto/update-indicaor_value.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
@ApiTags('indicaor_value')
@Controller('indicaor_value')
export class IndicaorValueController {
  constructor(private readonly indicaor_valueService: IndicaorValueService) {}

  @Post()
  create(@Body() body: CreateIndicaorValueDto) {
    return this.indicaor_valueService.create(body);
  }

  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'orderBy', required: false })
  @Get()
  findAll(@Query() query?) {
    return this.indicaor_valueService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.indicaor_valueService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateIndicaorValueDto) {
    return this.indicaor_valueService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.indicaor_valueService.remove(+id);
  }
}
