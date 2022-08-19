const Sequelize = require('sequelize');

const database = new Sequelize('dbsequelize', 'postgres', 'Cambior1972', {
	host: 'localhost',
	dialect: 'postgres'
});
database.sync()

module.exports = database;