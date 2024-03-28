"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Users", "avatar", {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: "", // Установка значения по умолчанию
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Users", "avatar");
  },
};
