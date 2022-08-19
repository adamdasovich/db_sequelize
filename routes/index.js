const mainController = require('../controllers/indexController');
const customerController = require('../controllers/customerController')



module.exports = (app) => {
	app.get('/', mainController.index)
	app.get('/list', customerController.list)

	app.post('/create', customerController.create)
	app.put('/update/:id', customerController.update)
	app.delete('/delete/:id', customerController.delete)
	app.get('/get/:id', customerController.get)
}