import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './domains/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { RoleModule } from './domains/role/role.module';
import { AuthModule } from './domains/auth/auth.module';
import { ImageModule } from './services/images/image.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { DatabaseModule } from './providers/database/database.module';
import { join } from 'path';
import * as dotenv from 'dotenv';
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
  providers: [],
})
export class AppModule {}
