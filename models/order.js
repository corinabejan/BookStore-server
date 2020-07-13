'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      order.belongsTo(models.customer);
      order.belongsToMany(models.book, {
        through: "orderItems",
        foreignKey: "orderId",
      });
    }
  };
  order.init({
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};