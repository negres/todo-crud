'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Tasks', 'date', 'completion_date');
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Tasks', 'completion_date', 'date');
  }
};
