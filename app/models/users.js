module.exports = (sequelize, DataTypes) => {

  const Userdb = sequelize.define('users', {
    // id : {
    //   type: DataTypes.STRING(30),
    // },
    name : {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    psword : {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    // in_date : {
    //   type: DataTypes.DATE
    // },
  }, {
    charset: 'utf8',
    collate: "utf8_general_ci",
    tableName: "cdd_sequelize",
    timestamps: true,
    paranoid: true,
  });
  
  return ;
}
  