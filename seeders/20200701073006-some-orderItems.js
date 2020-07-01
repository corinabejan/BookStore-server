"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "orderItems",
      [
        {
          quantity: 2,
          price: 20,
          orderId: 1,
          bookId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quantity: 1,
          price: 25,
          orderId: 2,
          bookId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("orderItems", null, {});
  },
};
