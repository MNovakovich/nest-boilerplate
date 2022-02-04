import { Module } from '@nestjs/common';
import { TakeCareService } from './take_care.service';
import { TakeCareController } from './take_care.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { TakeCare } from './take_care.entity';
import { take_careProviders } from './take_care.providers';

@Module({
  imports: [],
  controllers: [TakeCareController],
  providers: [TakeCareService, ...take_careProviders],
})
export class TakeCareModule {}
