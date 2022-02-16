import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { userProviders } from '../user/user.providers';
import { UserService } from '../user/user.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
@Module({
  controllers: [AuthController],
  imports: [
    forwardRef(() => UserModule),
    JwtModule.register({
      secret: 'sifra',
      signOptions: {
        expiresIn: '1d',
      },
    }),
  ],
  providers: [AuthService, UserService, ...userProviders],

  exports: [AuthService, JwtModule],
})
export class AuthModule {}
