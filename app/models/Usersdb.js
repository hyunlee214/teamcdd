module.exports = (sequelize, DataTypes) => {

  const Userdb = sequelize.define('Userdb', {
    id : {
      type: DataTypes.STRING
    },
    name : {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    psword : {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    in_date : {
      type: DataTypes.DATE
    },
  }, {
    charset: 'utf8',
    collate: "utf8_general_ci",
    tableName: "cdd_sequelize",
    timestamps: true,
    paranoid: true,
  });
  
  return Userdb;
}
  