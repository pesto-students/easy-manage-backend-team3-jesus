'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JymPlans extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Gyms)
    }
  }
  JymPlans.init({
    planId: DataTypes.STRING,
    planName: DataTypes.STRING,
    planPrice: DataTypes.STRING
  }, {
    sequelize,
    tableName:"jym_plans",
    modelName: 'JymPlans',
  });
  return JymPlans;
};