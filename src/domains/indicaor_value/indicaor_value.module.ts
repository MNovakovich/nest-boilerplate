import { Module } from '@nestjs/common';
import { IndicaorValueService } from './indicaor_value.service';
import { IndicaorValueController } from './indicaor_value.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { IndicaorValue } from './indicaor_value.entity';
import { indicaor_valueProviders } from './indicaor_value.providers';

@Module({
  imports: [],
  controllers: [IndicaorValueController],
  providers: [IndicaorValueService, ...indicaor_valueProviders],
})
export class IndicaorValueModule {}
