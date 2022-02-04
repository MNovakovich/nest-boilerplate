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

import { TakeCareService } from './take_care.service';
import { CreateTakeCareDto } from './dto/create-take_care.dto';
import { UpdateTakeCareDto } from './dto/update-take_care.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
@ApiTags('take_care')
@Controller('take_care')
export class TakeCareController {
  constructor(private readonly take_careService: TakeCareService) {}

  @Post()
  create(@Body() body: CreateTakeCareDto) {
    return this.take_careService.create(body);
  }

  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'orderBy', required: false })
  @Get()
  findAll(@Query() query?) {
    return this.take_careService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.take_careService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateTakeCareDto) {
    return this.take_careService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.take_careService.remove(+id);
  }
}
