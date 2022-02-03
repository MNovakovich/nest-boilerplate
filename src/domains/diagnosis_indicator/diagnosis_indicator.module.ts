import { Module } from '@nestjs/common';
import { DiagnosisIndicatorService } from './diagnosis_indicator.service';
import { DiagnosisIndicatorController } from './diagnosis_indicator.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { DiagnosisIndicator } from './diagnosis_indicator.entity';
import { diagnosis_indicatorProviders } from './diagnosis_indicator.providers';

@Module({
  imports: [],
  controllers: [DiagnosisIndicatorController],
  providers: [DiagnosisIndicatorService, ...diagnosis_indicatorProviders],
})
export class DiagnosisIndicatorModule {}