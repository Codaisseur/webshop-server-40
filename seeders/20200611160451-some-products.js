"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("products", [
      {
        name: "Fancy Chair",
        imageUrl: "",
        price: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Fancy Desk",
        imageUrl: "",
        price: 500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sofa",
        imageUrl: "",
        price: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "TV",
        imageUrl: "",
        price: 400,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("products", null, {});
  },
};
