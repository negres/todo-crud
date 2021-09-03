"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "Tasks",
      [
        {
          description: 'Estudar MySQL',
          date: new Date(),
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description: 'Estudar PLSQL',
          date: new Date(),
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description: 'Estudar Java',
          date: new Date(),
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description: 'Estudar Javascript',
          date: new Date(),
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description: 'Estudar React',
          date: new Date(),
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Tasks", null, {});
  },
};
