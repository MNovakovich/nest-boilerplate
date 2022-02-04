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

import { TreatmentDiagnosisService } from './treatment_diagnosis.service';
import { CreateTreatmentDiagnosisDto } from './dto/create-treatment_diagnosis.dto';
import { UpdateTreatmentDiagnosisDto } from './dto/update-treatment_diagnosis.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
@ApiTags('treatment_diagnosis')
@Controller('treatment_diagnosis')
export class TreatmentDiagnosisController {
  constructor(
    private readonly treatment_diagnosisService: TreatmentDiagnosisService,
  ) {}

  @Post()
  create(@Body() body: CreateTreatmentDiagnosisDto) {
    return this.treatment_diagnosisService.create(body);
  }

  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'orderBy', required: false })
  @Get()
  findAll(@Query() query?) {
    return this.treatment_diagnosisService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.treatment_diagnosisService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateTreatmentDiagnosisDto) {
    return this.treatment_diagnosisService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.treatment_diagnosisService.remove(+id);
  }
}
