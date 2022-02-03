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

import { DiagnosisIndicatorService } from './diagnosis_indicator.service';
import { CreateDiagnosisIndicatorDto } from './dto/create-diagnosis_indicator.dto';
import { UpdateDiagnosisIndicatorDto } from './dto/update-diagnosis_indicator.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
@ApiTags('diagnosis_indicator')
@Controller('diagnosis_indicator')
export class DiagnosisIndicatorController {
  constructor(private readonly diagnosis_indicatorService: DiagnosisIndicatorService) {}

  @Post()
  create(@Body() body: CreateDiagnosisIndicatorDto) {
    return this.diagnosis_indicatorService.create(body);
  }

  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'orderBy', required: false })
  @Get()
  findAll(@Query() query?) {
    return this.diagnosis_indicatorService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.diagnosis_indicatorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateDiagnosisIndicatorDto) {
    return this.diagnosis_indicatorService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.diagnosis_indicatorService.remove(+id);
  }
}