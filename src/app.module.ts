import { Module } from '@nestjs/common';
import { UserModule } from './domains/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { RoleModule } from './domains/role/role.module';
import { AuthModule } from './domains/auth/auth.module';
import { ImageModule } from './services/images/image.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { DatabaseModule } from './providers/database/database.module';
import { join } from 'path';
import * as dotenv from 'dotenv';
import { APP_FILTER } from '@nestjs/core';
import { HttpErrorFilter } from './common/excerptions/http-error.filter';
//import { modelsArr } from './exported-models';
dotenv.config();

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static'),
      exclude: ['/api*'],
    }),
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),

    UserModule,
    RoleModule,
    AuthModule,
    ImageModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpErrorFilter,
    },
  ],
})
export class AppModule {}
