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

import { DoctorsOfficeService } from './doctors_office.service';
import { CreateDoctorsOfficeDto } from './dto/create-doctors_office.dto';
import { UpdateDoctorsOfficeDto } from './dto/update-doctors_office.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
@ApiTags('doctors_office')
@Controller('doctors_office')
export class DoctorsOfficeController {
  constructor(private readonly doctors_officeService: DoctorsOfficeService) {}

  @Post()
  create(@Body() body: CreateDoctorsOfficeDto) {
    return this.doctors_officeService.create(body);
  }

  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'orderBy', required: false })
  @Get()
  findAll(@Query() query?) {
    return this.doctors_officeService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.doctors_officeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateDoctorsOfficeDto) {
    return this.doctors_officeService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.doctors_officeService.remove(+id);
  }
}