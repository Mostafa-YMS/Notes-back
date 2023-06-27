"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "noteTypes",
      [
        {
          name: "Backend",
          disabled: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Frontend",
          disabled: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Testing",
          disabled: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hr",
          disabled: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fun",
          disabled: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("noteTypes", null, {});
  },
};
