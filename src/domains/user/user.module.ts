import { forwardRef, Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
// import { SequelizeModule } from '@nestjs/sequelize';
// import { User } from './user.model';
// import { Role } from '../role/role.model';
import { RoleService } from '../role/role.service';
import { AuthModule } from '../auth/auth.module';
import { ImageService } from 'src/services/images/image.service';
import { usersProviders } from './user.providers';
import { rolesProviders } from '../role/roles.providers';
@Module({
  imports: [
    // SequelizeModule.forFeature([User, Role]),
    forwardRef(() => AuthModule),
  ],
  controllers: [UserController],
  providers: [
    UserService,
    RoleService,
    ImageService,
    ...usersProviders,
    ...rolesProviders,
  ],
  exports: [UserService],
})
export class UserModule {}
