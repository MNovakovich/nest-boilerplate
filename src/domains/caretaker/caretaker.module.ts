import { Module } from '@nestjs/common';
import { CaretakerService } from './caretaker.service';
import { CaretakerController } from './caretaker.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Caretaker } from './caretaker.entity';
import { caretakerProviders } from './caretaker.providers';

@Module({
  imports: [],
  controllers: [CaretakerController],
  providers: [CaretakerService, ...caretakerProviders],
})
export class CaretakerModule {}
