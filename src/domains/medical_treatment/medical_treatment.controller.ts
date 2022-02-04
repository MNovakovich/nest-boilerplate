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

import { MedicalTreatmentService } from './medical_treatment.service';
import { CreateMedicalTreatmentDto } from './dto/create-medical_treatment.dto';
import { UpdateMedicalTreatmentDto } from './dto/update-medical_treatment.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
@ApiTags('medical_treatment')
@Controller('medical_treatment')
export class MedicalTreatmentController {
  constructor(
    private readonly medical_treatmentService: MedicalTreatmentService,
  ) {}

  @Post()
  create(@Body() body: CreateMedicalTreatmentDto) {
    return this.medical_treatmentService.create(body);
  }

  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'orderBy', required: false })
  @Get()
  findAll(@Query() query?) {
    return this.medical_treatmentService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medical_treatmentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateMedicalTreatmentDto) {
    return this.medical_treatmentService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medical_treatmentService.remove(+id);
  }
}
