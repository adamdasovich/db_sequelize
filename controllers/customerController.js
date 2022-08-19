const Customer = require('../models/Customer');
const { Op } = require('sequelize')

exports.list = async (req, res) => {
	try {
		const response = await Customer.findAll()
			.then((data) => {
				const res = {
					success: true,
					data: data
				}
				return res;
			})
			.catch((err) => {
				const res = {
					success: false,
					message: err
				}
				return res;
			})
		res.json(response);
	} catch (error) {
		console.log(error)
	}
}


exports.create = async (req, res) => {
	const { name, email, address, phone } = req.body;
	try {
		const response = await Customer.create({
			name,
			email,
			address,
			phone
		})
			.then((data) => {
				const res = {
					success: true,
					data: data,
					message: 'Customer created successfully'
				}
				return res;
			}).catch((err) => {
				const res = {
					success: false,
					message: err
				}
				return res;
			})
		res.json(response);
	} catch (error) {
		console.log(error)
	}
}

exports.update = async (req, res) => {
	const { name, email, address, phone } = req.body
	const { id } = req.params
	try {
		const response = await Customer.update({
			name: name,
			email: email,
			address: address,
			phone: phone
		}, {
			where: { id: id }
		})
			.then((data) => {
				if (data.length != 0) {
					const res = {
						success: true,
						data: data,
						message: 'updated Successfully'
					}
					return res;
				}
				else {
					res.status(500).send({
						success: false,
						data: data,
						message: 'Could not update with this id ' + id
					})
				}
			})

		res.json(response)

	}
	catch (e) {
		console.log(e)
	}
}
// Delete a customer
exports.delete = async (req, res) => {
	const { id } = req.params;
	try {
		const response = await Customer.destroy({
			where: { id: id }
		})
			.then((data) => {
				if (data == 1) {
					const res = {
						success: true,
						data: data,
						message: 'Customer deleted successfully'
					}
					return res;
				}
				else {
					res.status(500).send({
						success: false,
						data: data,
						message: 'Could not delete with this id ' + id
					})
				}
			})
		res.json(response)
	}
	catch (e) {
		console.log(e)
	}
}

exports.get = async (req, res) => {
	const { id } = req.params
	try {
		const response = await Customer.findAll({
			where: { id: id }
		})
			.then(function (data) {
				if (data.length != 0) {
					const res = {
						success: true,
						data: data
					}
					return res;
				}
				else {
					res.status(404).send({
						success: false,
						data: data,
						message: 'No Record Found with id ' + id
					})
				}
			})
			.catch(error => {
				const res = {
					success: false,
					error: error
				}
				return res;
			})
		res.json(response)

	}
	catch (e) {
		console.log(e)
	}

}


