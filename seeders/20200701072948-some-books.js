"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "books",
      [
        {
          title: "The Idiot",
          author: "Fyodor Dostoevsky",
          genre: "fiction",
          year: "1868",
          price: "20.00",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Journal Of Happiness",
          author: "Nicolae Steinhardt",
          genre: "biography",
          year: "1991",
          price: "25.00",
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("books", null, {});
  },
};
