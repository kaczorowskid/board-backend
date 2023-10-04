'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('boards', 'owner_id', {
      type: Sequelize.UUID,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('boards', 'owner_id');
  }
};
