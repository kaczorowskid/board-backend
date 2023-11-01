'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.dropTable('tables');
    await queryInterface.dropTable('folders');
  },

  async down (queryInterface, Sequelize) {

  }
};
