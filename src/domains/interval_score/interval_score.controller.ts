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

import { IntervalScoreService } from './interval_score.service';
import { CreateIntervalScoreDto } from './dto/create-interval_score.dto';
import { UpdateIntervalScoreDto } from './dto/update-interval_score.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
@ApiTags('interval_score')
@Controller('interval_score')
export class IntervalScoreController {
  constructor(private readonly interval_scoreService: IntervalScoreService) {}

  @Post()
  create(@Body() body: CreateIntervalScoreDto) {
    return this.interval_scoreService.create(body);
  }

  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'orderBy', required: false })
  @Get()
  findAll(@Query() query?) {
    return this.interval_scoreService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.interval_scoreService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateIntervalScoreDto) {
    return this.interval_scoreService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.interval_scoreService.remove(+id);
  }
}
