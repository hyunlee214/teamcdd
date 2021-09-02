'use strict';

const { Sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {

  const users = sequelize.define('users', {
    name : {
      type: DataTypes.STRING,
      allowNull: false
    },
    psword : {
      type: DataTypes.STRING,
      allowNull: false
    },
    salt: {
      type: DataTypes.STRING
    }
  });
    return users;
  }