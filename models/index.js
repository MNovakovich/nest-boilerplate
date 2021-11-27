'use strict';
const fs = require('fs');//eslint-disable-line
const path = require('path'); //eslint-disable-line
const Sequelize = require('sequelize');//eslint-disable-line
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../src/database/config.ts')[env];//eslint-disable-line
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);//eslint-disable-line
}

fs.readdirSync(__dirname)
  .filter(file => {//eslint-disable-line
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');//eslint-disable-line
  })
  .forEach(file => { //eslint-disable-line
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);//eslint-disable-line
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {//eslint-disable-line
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
