'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.belongsTo(models.SuperAdmin)
      // this.hasMany(models.Users)
    }
  }
  Roles.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    role: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'roles',
    modelName: 'Roles',
  });
  return Roles;
};