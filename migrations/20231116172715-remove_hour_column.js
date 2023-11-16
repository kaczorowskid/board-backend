'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('calendars', 'hour');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn('calendars', 'hour', {
      type: Sequelize.TIME
    });
  }
};
