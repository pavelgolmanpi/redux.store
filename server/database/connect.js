const Sequelize = require('sequelize');

const database = new Sequelize('mysql://store:store@localhost:3306/redux_store');

module.exports = database;
