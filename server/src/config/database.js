// src/config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('gestor_turnos', 'postgres', 'pizza', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
