"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "customers",
      [
        {
          firstName: "Corina",
          lastName: "Bejan",
          email: "corina@corina.com",
          streetName: "Boterstraat",
          streetNumber: 15,
          postalCode: "3511LZ",
          city: "Utrecht",
          country: "Netherlands",
          phoneNumber: 645400154,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: "Bella",
          lastName: "Bejan",
          email: "bella@bela.com",
          streetName: "Potterstraat ",
          streetNumber: 12,
          postalCode: "3512TA",
          city: "Utrecht",
          country: "Netherlands",
          phoneNumber: 1234567,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("customers", null, {});
  },
};
