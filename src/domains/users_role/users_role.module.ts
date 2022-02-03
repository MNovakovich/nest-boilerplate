import { Module } from '@nestjs/common';
import { UsersRoleService } from './users_role.service';
import { UsersRoleController } from './users_role.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersRole } from './users_role.entity';
import { users_roleProviders } from './users_role.providers';

@Module({
  imports: [],
  controllers: [UsersRoleController],
  providers: [UsersRoleService, ...users_roleProviders],
})
export class UsersRoleModule {}