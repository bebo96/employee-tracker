const express = require('express');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');
const inquirer = require('inquirer');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use apiRoutes
app.use('/api', apiRoutes);

const startPrompt = () => {inquirer
  .prompt([
    {
      type: 'list',
      name: 'choices',
      message: 'What woud you like to do?',
      choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit'],
    },
  ])
  .then(answers => {
    if(answers.choices == "View All Employees"){
        //view departments
        viewDepartments();
    }
    else{
        console.log("nay");
        return;
    };
  });
}

function viewDepartments(){
    console.log("test");

    const sql = ''

    startPrompt();
}

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

// Start server after DB connection
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  console.log("****************************");
  console.log("******EMPLOYEE MANAGER******");
  console.log("****************************");
  startPrompt();
});