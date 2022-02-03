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

import { TakecareNoteService } from './takecare_note.service';
import { CreateTakecareNoteDto } from './dto/create-takecare_note.dto';
import { UpdateTakecareNoteDto } from './dto/update-takecare_note.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
@ApiTags('takecare_note')
@Controller('takecare_note')
export class TakecareNoteController {
  constructor(private readonly takecare_noteService: TakecareNoteService) {}

  @Post()
  create(@Body() body: CreateTakecareNoteDto) {
    return this.takecare_noteService.create(body);
  }

  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'orderBy', required: false })
  @Get()
  findAll(@Query() query?) {
    return this.takecare_noteService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.takecare_noteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateTakecareNoteDto) {
    return this.takecare_noteService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.takecare_noteService.remove(+id);
  }
}