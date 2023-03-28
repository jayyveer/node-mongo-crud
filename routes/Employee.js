const express = require('express')
const router = express.Router()

const EmployeeController = require('../controllers/EmployeeControler')

router.get('/', EmployeeController.index)
router.post('/show', EmployeeController.show)
router.post('/store', EmployeeController.store)
router.post('/update', EmployeeController.update)
router.post('/delete', EmployeeController.destroy)

module.exports = router

/*Postman request routes
http://localhost:3001/api/employee
http://localhost:3001/api/employee/show
http://localhost:3001/api/employee/store
http://localhost:3001/api/employee/update
http://localhost:3001/api/employee/delete
*/
