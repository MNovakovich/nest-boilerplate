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

import { DiagnosisService } from './diagnosis.service';
import { CreateDiagnosisDto } from './dto/create-diagnosis.dto';
import { UpdateDiagnosisDto } from './dto/update-diagnosis.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
@ApiTags('diagnosis')
@Controller('diagnosis')
export class DiagnosisController {
  constructor(private readonly diagnosisService: DiagnosisService) {}

  @Post()
  create(@Body() body: CreateDiagnosisDto) {
    return this.diagnosisService.create(body);
  }

  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'orderBy', required: false })
  @Get()
  findAll(@Query() query?) {
    return this.diagnosisService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.diagnosisService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateDiagnosisDto) {
    return this.diagnosisService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.diagnosisService.remove(+id);
  }
}
