"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          id: 1,
          name: "Mostafa",
          pic: null,
          createdAt: new Date("2023-06-29T18:48:14.000Z"),
          updatedAt: new Date("2023-06-29T18:48:14.000Z"),
        },
        {
          id: 2,
          name: "Hany",
          pic: null,
          createdAt: new Date("2023-06-29T18:48:15.000Z"),
          updatedAt: new Date("2023-06-29T18:48:15.000Z"),
        },
        {
          id: 3,
          name: "Omar",
          pic: null,
          createdAt: new Date("2023-06-29T18:48:15.000Z"),
          updatedAt: new Date("2023-06-29T18:48:15.000Z"),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
