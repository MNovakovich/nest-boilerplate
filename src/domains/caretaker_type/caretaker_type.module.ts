import { Module } from '@nestjs/common';
import { CaretakerTypeService } from './caretaker_type.service';
import { CaretakerTypeController } from './caretaker_type.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { CaretakerType } from './caretaker_type.entity';
import { caretaker_typeProviders } from './caretaker_type.providers';

@Module({
  imports: [],
  controllers: [CaretakerTypeController],
  providers: [CaretakerTypeService, ...caretaker_typeProviders],
})
export class CaretakerTypeModule {}