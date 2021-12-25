import { Sequelize } from 'sequelize-typescript';

const sequelizeConnection = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'nest_db',
});

export default sequelizeConnection;
