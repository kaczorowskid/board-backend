'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('tickets', 'column_id', {
      type: Sequelize.UUID,
      references: {
        model: 'columns',
        key: 'id',
      },
      onDelete: 'CASCADE',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('tickets', 'column_id', {
      type: Sequelize.UUID,
      references: {
        model: 'columns',
        key: 'id',
      },
      onDelete: 'SET NULL',
    });
  }
};
