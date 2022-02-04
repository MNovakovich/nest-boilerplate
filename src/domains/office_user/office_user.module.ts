import { Module } from '@nestjs/common';
import { OfficeUserService } from './office_user.service';
import { OfficeUserController } from './office_user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { OfficeUser } from './office_user.entity';
import { office_userProviders } from './office_user.providers';

@Module({
  imports: [],
  controllers: [OfficeUserController],
  providers: [OfficeUserService, ...office_userProviders],
})
export class OfficeUserModule {}
