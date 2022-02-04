import { Module } from '@nestjs/common';
import { TreatmentIndicatorService } from './treatment_indicator.service';
import { TreatmentIndicatorController } from './treatment_indicator.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { TreatmentIndicator } from './treatment_indicator.entity';
import { treatment_indicatorProviders } from './treatment_indicator.providers';

@Module({
  imports: [],
  controllers: [TreatmentIndicatorController],
  providers: [TreatmentIndicatorService, ...treatment_indicatorProviders],
})
export class TreatmentIndicatorModule {}
