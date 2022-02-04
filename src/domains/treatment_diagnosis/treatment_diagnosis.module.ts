import { Module } from '@nestjs/common';
import { TreatmentDiagnosisService } from './treatment_diagnosis.service';
import { TreatmentDiagnosisController } from './treatment_diagnosis.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { TreatmentDiagnosis } from './treatment_diagnosis.entity';
import { treatment_diagnosisProviders } from './treatment_diagnosis.providers';

@Module({
  imports: [],
  controllers: [TreatmentDiagnosisController],
  providers: [TreatmentDiagnosisService, ...treatment_diagnosisProviders],
})
export class TreatmentDiagnosisModule {}
