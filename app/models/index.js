'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';                              
const config = require(__dirname + '/../config/config.json')[env];                        // json파일의 sequelize설정들을 config로 불러옴.
const db = {};                                                                            // db라는 객체로 만들어 모듈로 사용. (db안에 sequelize패키지/인스턴스 넣어서 사용 - 코드 밑줄)

let sequelize;                                                                                // sequelize패키지를 설정들을 추가해 인스턴스화 함.
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);       // config가 config.js의 database, username, psword들을 불러온것.
}                                                                   

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });

Object.keys(db).forEach(modelName => {                // db에 modelName연결
  if (db[modelName].associate) {  
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;                     // db객체에 sequelize인스턴스 추가
db.Sequelize = Sequelize;                     // db객체에 sequelize패키지 추가

module.exports = db;
