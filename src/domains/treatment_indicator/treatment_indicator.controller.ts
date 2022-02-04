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

import { TreatmentIndicatorService } from './treatment_indicator.service';
import { CreateTreatmentIndicatorDto } from './dto/create-treatment_indicator.dto';
import { UpdateTreatmentIndicatorDto } from './dto/update-treatment_indicator.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
@ApiTags('treatment_indicator')
@Controller('treatment_indicator')
export class TreatmentIndicatorController {
  constructor(
    private readonly treatment_indicatorService: TreatmentIndicatorService,
  ) {}

  @Post()
  create(@Body() body: CreateTreatmentIndicatorDto) {
    return this.treatment_indicatorService.create(body);
  }

  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'orderBy', required: false })
  @Get()
  findAll(@Query() query?) {
    return this.treatment_indicatorService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.treatment_indicatorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateTreatmentIndicatorDto) {
    return this.treatment_indicatorService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.treatment_indicatorService.remove(+id);
  }
}
