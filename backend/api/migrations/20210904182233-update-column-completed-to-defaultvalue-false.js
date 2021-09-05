'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Tasks', 'completed', {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Tasks', 'completed', {
      type: Sequelize.BOOLEAN
    })
  }
};
