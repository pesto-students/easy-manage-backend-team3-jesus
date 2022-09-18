"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Gyms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.SuperAdmin);
      this.hasMany(models.GymPlan);
      this.hasMany(models.Users);
    }
  }
  Gyms.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      stateName: DataTypes.STRING,
      country: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "gyms",
      modelName: "Gyms",
    }
  );
  return Gyms;
};
