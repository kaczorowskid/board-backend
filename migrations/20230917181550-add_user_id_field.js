'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('tickets', 'user_id', {
        type: Sequelize.UUID,
      });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('tickets', 'user_id');
  }
};
