const express = require('express');
const app = express();
const employees = require('./employees.json');

// GET endpoint for all employees
app.get('/employees', (req, res) => {
  res.json(employees);
});

// GET endpoint for a specific employee
app.get('/employees/:employeeID', (req, res) => {
  const { employeeID } = req.params;
  const employee = employees.employees.find(emp => emp.employeeID === parseInt(employeeID));

  if (employee) {
    res.json(employee);
  } else {
    res.status(404).json({ error: 'Employee not found' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});