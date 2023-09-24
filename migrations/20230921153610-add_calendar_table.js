'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('calendars', {
      id: {
        defaultValue: Sequelize.UUIDV4,
        type: Sequelize.UUID,
        primaryKey: true,
      },
      start_date: Sequelize.DATE,
      note: Sequelize.STRING,
      user_id: Sequelize.UUID,
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('calendars');
  }
};
