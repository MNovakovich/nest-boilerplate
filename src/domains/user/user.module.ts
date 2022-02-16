import { forwardRef, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

import { userProviders } from './user.providers';

import { AuthModule } from '../auth/auth.module';
import { UsersRoleService } from '../users_role/users_role.service';
import { users_roleProviders } from '../users_role/users_role.providers';

@Module({
  imports: [forwardRef(() => AuthModule)],
  controllers: [UserController],
  providers: [
    UserService,
    UsersRoleService,
    ...users_roleProviders,
    ...userProviders,
  ],
})
export class UserModule {}
