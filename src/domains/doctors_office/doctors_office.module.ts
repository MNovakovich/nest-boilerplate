import { Module } from '@nestjs/common';
import { DoctorsOfficeService } from './doctors_office.service';
import { DoctorsOfficeController } from './doctors_office.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { DoctorsOffice } from './doctors_office.entity';
import { doctors_officeProviders } from './doctors_office.providers';

@Module({
  imports: [],
  controllers: [DoctorsOfficeController],
  providers: [DoctorsOfficeService, ...doctors_officeProviders],
})
export class DoctorsOfficeModule {}