import { Module } from '@nestjs/common';
import { DescriptiveIndicatorService } from './descriptive_indicator.service';
import { DescriptiveIndicatorController } from './descriptive_indicator.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { DescriptiveIndicator } from './descriptive_indicator.entity';
import { descriptive_indicatorProviders } from './descriptive_indicator.providers';

@Module({
  imports: [],
  controllers: [DescriptiveIndicatorController],
  providers: [DescriptiveIndicatorService, ...descriptive_indicatorProviders],
})
export class DescriptiveIndicatorModule {}
