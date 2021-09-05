'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Tasks = sequelize.define('Tasks', {
    description: DataTypes.STRING,
    completion_date: DataTypes.DATEONLY,
    completed: DataTypes.BOOLEAN
  }, {});
  Tasks.associate = function(models) {
    // associations can be defined here
  };
  return Tasks;
};
