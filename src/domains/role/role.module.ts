import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { RoleController } from './role.controller';
import { Role } from './role.model';
import { UserRoles } from './user-role.model';
import { RoleService } from './role.service';
import { rolesProviders } from './roles.providers';

@Module({
  // imports: [SequelizeModule.forFeature([Role])],
  controllers: [RoleController],
  providers: [RoleService, ...rolesProviders],
})
export class RoleModule {}
