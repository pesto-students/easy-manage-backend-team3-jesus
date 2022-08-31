'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Gyms)
      this.belongsTo(models.Users)
      // define association here
    }
  }
  Events.init({
      body: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Events',
  });
  return Events;
};