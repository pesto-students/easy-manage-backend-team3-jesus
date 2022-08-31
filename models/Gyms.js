'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gyms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.AccountsData)
      // this.belongsTo(JymPlans,{ foreignKey: "planID", onDelete:"CASCADE"})
      this.hasMany(models.Users)
      this.hasMany(models.Events)
      this.hasMany(models.GymsPlan)
      this.belongsTo(models.JymPlans)
    }
  }
  Gyms.init({
    gymName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Gym must have a name" },
        notEmpty: { msg: "Name must not be empty" },
      },
    },
    adminName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Gym Admin must have a name" },
        notEmpty: { msg: "Name must not be empty" },
      },
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Gym  must have an Address" },
        notEmpty: { msg: "Address must not be empty" },
      },
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Gym must have an City" },
        notEmpty: { msg: "City must not be empty" },
      },
    },
    pincode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Gym  must have an Pincode" },
        notEmpty: { msg: "PinCode must not be empty" },
      },
    },
  }, {
    sequelize,
    tableName:"gyms",
    modelName: 'Gyms',
  });
  return Gyms;
};