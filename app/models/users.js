'use strict';

module.exports = (sequelize, DataTypes) => {

  const users = sequelize.define('users', {
    // id : {
    //   type: DataTypes.STRING(30),
    //   allowNull: false
    // },
    name : {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    psword : {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  }, 
  {
    charset: 'utf8',
    collate: "utf8_general_ci",
    tableName: "cddtable",
    timestamps: true,
    paranoid: true
  })
  // users.associate = (models) => {
  //     // users.belongsTo(models.LogType, { foreginKey: 'usersId' })
  //   };
    return users
  }