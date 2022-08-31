'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GymsPlan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Gyms)
      // define association here
    }
  }
  GymsPlan.init({
    planName: DataTypes.STRING,
    price: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'GymsPlan',
  });
  return GymsPlan;
};