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

import { MedicalIndicatorService } from './medical_indicator.service';
import { CreateMedicalIndicatorDto } from './dto/create-medical_indicator.dto';
import { UpdateMedicalIndicatorDto } from './dto/update-medical_indicator.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
@ApiTags('medical_indicator')
@Controller('medical_indicator')
export class MedicalIndicatorController {
  constructor(private readonly medical_indicatorService: MedicalIndicatorService) {}

  @Post()
  create(@Body() body: CreateMedicalIndicatorDto) {
    return this.medical_indicatorService.create(body);
  }

  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'orderBy', required: false })
  @Get()
  findAll(@Query() query?) {
    return this.medical_indicatorService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medical_indicatorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateMedicalIndicatorDto) {
    return this.medical_indicatorService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medical_indicatorService.remove(+id);
  }
}