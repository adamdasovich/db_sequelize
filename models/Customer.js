const Sequelize = require('sequelize')

const sequelize = require('../database')

const Customer = sequelize.define('customers', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: Sequelize.STRING,
	email: Sequelize.STRING,
	address: Sequelize.STRING,
	phone: Sequelize.BIGINT
})

module.exports = Customer;