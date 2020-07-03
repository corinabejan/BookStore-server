"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      book.belongsTo(models.category);
      book.belongsToMany(models.order, {
        through: "orderItems",
        foreignKey: "bookId",
      });
    }
  }
  book.init(
    {
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      genre: DataTypes.STRING,
      year: DataTypes.STRING,
      image: DataTypes.STRING,
      review: DataTypes.STRING(60000),
      price: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "book",
    }
  );
  return book;
};
