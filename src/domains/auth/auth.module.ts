import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [
    UserModule,
    JwtModule.register({
      privateKey: process.env.JWTKEY || 'JWT-PRIVATE-KEY',
      signOptions: {
        expiresIn: '60s',
      },
    }),
  ],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
