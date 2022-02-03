import { Module } from '@nestjs/common';
import { ValuetypeService } from './valuetype.service';
import { ValuetypeController } from './valuetype.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Valuetype } from './valuetype.entity';
import { valuetypeProviders } from './valuetype.providers';

@Module({
  imports: [],
  controllers: [ValuetypeController],
  providers: [ValuetypeService, ...valuetypeProviders],
})
export class ValuetypeModule {}