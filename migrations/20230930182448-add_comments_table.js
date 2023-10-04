'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('comments', {
      id: {
        defaultValue: Sequelize.UUIDV4,
        type: Sequelize.UUID,
        primaryKey: true,
      },
      text: Sequelize.STRING,
      ticket_id: {
        type: Sequelize.UUID,
        references: {
          model: 'tickets',
          key: 'id',
        }
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('comments');
  }
};
