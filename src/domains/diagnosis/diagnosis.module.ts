import { Module } from '@nestjs/common';
import { DiagnosisService } from './diagnosis.service';
import { DiagnosisController } from './diagnosis.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Diagnosis } from './diagnosis.entity';
import { diagnosisProviders } from './diagnosis.providers';

@Module({
  imports: [],
  controllers: [DiagnosisController],
  providers: [DiagnosisService, ...diagnosisProviders],
})
export class DiagnosisModule {}