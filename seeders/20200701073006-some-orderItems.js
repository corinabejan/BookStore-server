"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "orderItems",
      [
        {
          orderId: 1,
          bookId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          orderId: 2,
          bookId: 1,
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
