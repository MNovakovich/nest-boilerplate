import { Module } from '@nestjs/common';
import { PatientService } from './patient.service';
import { PatientController } from './patient.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Patient } from './patient.entity';
import { patientProviders } from './patient.providers';

@Module({
  imports: [],
  controllers: [PatientController],
  providers: [PatientService, ...patientProviders],
})
export class PatientModule {}