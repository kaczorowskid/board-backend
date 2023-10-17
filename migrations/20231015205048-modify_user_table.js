'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.renameColumn('users', 'name', 'first_name', { transaction: t });
      await queryInterface.addColumn('users', 'last_name', {
        type: Sequelize.STRING,
      }, { transaction: t });

      await queryInterface.sequelize.query('ALTER TABLE users RENAME COLUMN first_name TO name;', { transaction: t });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.sequelize.query('ALTER TABLE users RENAME COLUMN name TO first_name;', { transaction: t });
      await queryInterface.removeColumn('users', 'last_name', { transaction: t });
      await queryInterface.renameColumn('users', 'first_name', 'name', { transaction: t });
    });
  }
};
