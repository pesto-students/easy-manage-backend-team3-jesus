'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(Gyms) {
      // define association here
      // this.belongsTo(Gyms,{ foreignKey: "planID", onDelete:"CASCADE"})
    }
  }
  Users.init({
    gymId: DataTypes.STRING,
    userId: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    role: DataTypes.STRING,
    status: DataTypes.STRING,
    pincode: DataTypes.STRING
  }, {
    sequelize,
    tableName:"users",
    modelName: 'Users',
  });
  return Users;
};