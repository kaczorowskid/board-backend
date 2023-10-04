'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn('comments', 'user_id', {
      type: Sequelize.UUID,
      references: {
        model: 'users',
        key: 'id',
      },
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('tickets', 'user_id');
  }
};
