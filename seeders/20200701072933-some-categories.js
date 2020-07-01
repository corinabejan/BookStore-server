"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          genre: "fiction",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          genre: "nonfiction",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          genre: "biography",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
