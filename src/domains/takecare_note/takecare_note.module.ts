import { Module } from '@nestjs/common';
import { TakecareNoteService } from './takecare_note.service';
import { TakecareNoteController } from './takecare_note.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { TakecareNote } from './takecare_note.entity';
import { takecare_noteProviders } from './takecare_note.providers';

@Module({
  imports: [],
  controllers: [TakecareNoteController],
  providers: [TakecareNoteService, ...takecare_noteProviders],
})
export class TakecareNoteModule {}
