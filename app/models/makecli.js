'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class makecli extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  makecli.init({
    id: DataTypes.STRING,
    name: DataTypes.STRING,
    psword: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'makecli',
  });
  return makecli;
};