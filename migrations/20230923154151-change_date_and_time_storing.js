'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await  queryInterface.changeColumn('calendars', 'start_date', {
      type: Sequelize.DATEONLY,
    });

    await queryInterface.addColumn('calendars', 'hour', {
      type: Sequelize.TIME,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('calendars', 'start_date', {
      type: Sequelize.DATE,
    });

    await queryInterface.removeColumn('calendars', 'hour');
  }
};
