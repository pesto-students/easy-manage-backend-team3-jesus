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
      this.belongsTo(models.SuperAdmin)
      this.hasMany(models.Gyms)
    }
  }
  JymPlans.init({
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
    tableName:"jymplans",
    modelName: 'JymPlans',
  });
  return JymPlans;
};