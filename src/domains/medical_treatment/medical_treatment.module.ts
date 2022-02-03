import { Module } from '@nestjs/common';
import { MedicalTreatmentService } from './medical_treatment.service';
import { MedicalTreatmentController } from './medical_treatment.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { MedicalTreatment } from './medical_treatment.entity';
import { medical_treatmentProviders } from './medical_treatment.providers';

@Module({
  imports: [],
  controllers: [MedicalTreatmentController],
  providers: [MedicalTreatmentService, ...medical_treatmentProviders],
})
export class MedicalTreatmentModule {}