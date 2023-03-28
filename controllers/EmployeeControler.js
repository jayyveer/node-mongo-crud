const Employee = require("../models/Employee");

// Show the list of Employees
const index = (req, res, next) => {
  Employee.find()
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: "Error has occured",
      });
    });
};

const show = (req, res, next) => {
  let employeeID = req.body.employeeID;
  Employee.findById(employeeID)
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: "Error has occured",
      });
    });
};

const store = (req, res, next) => {
  let employee = new Employee({
    name: req.body.name,
    desgination: req.body.desgination,
    email: req.body.email,
    phone: req.body.phone,
    age: req.body.age,
  });
  employee
    .save()
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: "Error has occured",
      });
    });
};

//Update an employee
const update = (req, res, next) => {
  let employeeID = req.body.employeeID;

  let updatedData = {
    name: req.body.name,
    desgination: req.body.desgination,
    email: req.body.email,
    phone: req.body.phone,
    age: req.body.age,
  };

  Employee.findIdandUpdate(employee, { $set: updatedData })
    .then(() => {
      res.json({
        meassage: "Employee updated succesfully",
      });
    })
    .catch((error) => {
      res.json({
        message: "Error has occurred",
      });
    });
};

//Delet an employee
const destroy = (req, res, next) => {
  let employeeID = req.body.employeeID;
  Employee.findOneandRemove(employeeID)
    .then(() => {
      res.json({
        messgae: "Employee deleted Succesfully",
      });
    })
    .catch((error) => {
      res.json({
        message: "Error has occured",
      });
    });
};
module.exports = {
  index,
  show,
  update,
  destroy,
  store,
};
