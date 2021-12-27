import { Sequelize } from 'sequelize-typescript';
import * as dotenv from 'dotenv';
dotenv.config();
const sequelizeConnection = new Sequelize({
  dialect: 'mysql',
  host: process.env.HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

export default sequelizeConnection;
