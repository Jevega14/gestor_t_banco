// src/config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('gestor_turnos','postgres','pizza', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});

module.exports = sequelize;
