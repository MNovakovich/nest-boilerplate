import { Module } from '@nestjs/common';
import { MedicalIndicatorService } from './medical_indicator.service';
import { MedicalIndicatorController } from './medical_indicator.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { MedicalIndicator } from './medical_indicator.entity';
import { medical_indicatorProviders } from './medical_indicator.providers';

@Module({
  imports: [],
  controllers: [MedicalIndicatorController],
  providers: [MedicalIndicatorService, ...medical_indicatorProviders],
})
export class MedicalIndicatorModule {}