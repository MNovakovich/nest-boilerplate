/*
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASS=
DB_DIALECT=mysql
DB_NAME_TEST=nest_db
DB_NAME_DEVELOPMENT=nest_db
DB_NAME_PRODUCTION=nest_db
JWTKEY=myJwtKey
TOKEN_EXPIRATION=48h
BEARER=Bearer
PORT=5000
*/
module.exports = {
  development: {
    username: 'root',
    password: '',
    database: 'nest_db',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: '',
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
