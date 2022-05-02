'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Device extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Device.belongsTo(models.Category, {
        foreignKey: 'Category_fk'
      })
    }
  }

  Device.init({
    Color:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: {
          args: true,
          msg: 'Color field only accept letters.'
        },
        len:{
          args:[0,16],
          msg:"Color field until 16 chars."
        },
        notNull: {
          msg: 'Color field can not be empty.'
        },

      },
    },
    PartNumber:{
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: {
        args: true,
        msg: 'PartNumber field accept only integer numbers.'
      },
      notNull: {
        msg: 'PartNumber field can not be empty.'
      },
    },
    },
  }, {
    sequelize,
    modelName: 'Device',
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
  });
  return Device;
};