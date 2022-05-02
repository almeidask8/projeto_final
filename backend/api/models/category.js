'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category.hasMany(models.Device, {
        foreignKey: 'Category_fk'
      })
    }
  }
  Category.init({
    Name:{
     type: DataTypes.STRING,
     allowNull: false,
     validate: {
      len:{
        args:[0,126],
        msg:"Name field accept until 126 chars."
      },
      notEmpty:{
        args: true,
        msg: "Name field can not be empty."
      },
      notNull: {
        msg: 'Name field can not be null.'
      },
    },
    },
  }, {
    sequelize,
    modelName: 'Category',
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
  });
  return Category;
};