import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './models/user/user.module';
import { User } from './models/user/user.model';
import { Role } from './models/role/role.model';
import { ConfigModule } from '@nestjs/config';
import { RoleModule } from './models/role/role.module';
import * as dotenv from 'dotenv';
dotenv.config();
// const data = {
//   username: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
//   host: process.env.DB_HOST,
//   dialect: 'mysql',
// };

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nest_db',
      models: [User, Role],
      // sync: { force: true },
      // autoLoadModels: true,
    }),
    UserModule,
    RoleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
