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

import { DescriptiveIndicatorService } from './descriptive_indicator.service';
import { CreateDescriptiveIndicatorDto } from './dto/create-descriptive_indicator.dto';
import { UpdateDescriptiveIndicatorDto } from './dto/update-descriptive_indicator.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
@ApiTags('descriptive_indicator')
@Controller('descriptive_indicator')
export class DescriptiveIndicatorController {
  constructor(private readonly descriptive_indicatorService: DescriptiveIndicatorService) {}

  @Post()
  create(@Body() body: CreateDescriptiveIndicatorDto) {
    return this.descriptive_indicatorService.create(body);
  }

  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'orderBy', required: false })
  @Get()
  findAll(@Query() query?) {
    return this.descriptive_indicatorService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.descriptive_indicatorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateDescriptiveIndicatorDto) {
    return this.descriptive_indicatorService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.descriptive_indicatorService.remove(+id);
  }
}