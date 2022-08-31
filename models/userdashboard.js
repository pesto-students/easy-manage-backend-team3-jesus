'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserDashboard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Users)
    }
  }
  UserDashboard.init({
    height: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    goal: DataTypes.STRING,
    activity: DataTypes.STRING,
    attendance: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserDashboard',
  });
  return UserDashboard;
};