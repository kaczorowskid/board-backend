'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('tickets', 'start');
    await queryInterface.removeColumn('tickets', 'end');
  },

  async down (queryInterface, Sequelize) {
  }
};
