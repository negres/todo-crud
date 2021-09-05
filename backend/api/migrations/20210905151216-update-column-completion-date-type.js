'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Tasks', 'completion_date', {
      type: Sequelize.DATEONLY,
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Tasks', 'completion_date', {
      type: Sequelize.DATE,
    })
  }
};
