'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GymPlan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Gyms)
      this.hasMany(models.Users)
    }
  }
  GymPlan.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    planName: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    tableName:'gymplan',
    modelName: 'GymPlan',
  });
  return GymPlan;
};