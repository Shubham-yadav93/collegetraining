const express = require ('express')
const router = express.Router();
const employeeController = require("../controller/EmployeeController")

router.post("/add-emp",employeeController.cemp)

module.exports = router;