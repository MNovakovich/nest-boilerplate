import { forwardRef, Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { Role } from '../role/role.model';
import { RoleService } from '../role/role.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    SequelizeModule.forFeature([User, Role]),
    forwardRef(() => AuthModule),
  ],
  controllers: [UserController],
  providers: [UserService, RoleService],
  exports: [UserService],
})
export class UserModule {}
