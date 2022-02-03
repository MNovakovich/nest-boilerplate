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

import { PatientService } from './patient.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
@ApiTags('patient')
@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post()
  create(@Body() body: CreatePatientDto) {
    return this.patientService.create(body);
  }

  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'orderBy', required: false })
  @Get()
  findAll(@Query() query?) {
    return this.patientService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.patientService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdatePatientDto) {
    return this.patientService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.patientService.remove(+id);
  }
}