'use strict';

module.exports = (sequelize, DataTypes) => {

  const users = sequelize.define('users', {
    name : {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    psword : {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  });
    return users;
  }