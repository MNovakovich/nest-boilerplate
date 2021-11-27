import { Sequelize } from 'sequelize-typescript';

export default new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'nest_db',
});
