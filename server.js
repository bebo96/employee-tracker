const express = require('express');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');
const inquirer = require('inquirer');
const cTable = require('console.table');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

// Use apiRoutes
app.use('/api', apiRoutes);

const startPrompt = () => {
    inquirer
        .prompt([{
            type: 'list',
            name: 'choices',
            message: 'What woud you like to do?',
            choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit'],
        }, ])
        .then(answers => {
            if (answers.choices == "View All Employees") {
                viewEmployees();
            } else if (answers.choices === "Add Employee") {
                addEmployee();
            } else if (answers.choices === "Update Employee Role") {
                updateEmployee();
            } else if (answers.choices === "View All Roles") {
                viewRoles();
            } else if (answers.choices === "Add Role") {
                addRole();
            } else if (answers.choices === "View All Departments") {
                viewDepartments();
            } else if (answers.choices === "Add Department") {
                addDepartment();
            }
            else if (answers.choices === "Quit") {
                Quit();
            };
        });
}

//View all employees. Query was written with ASKBCs help from Ben 
function viewEmployees() {
    const sql = 'SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, " " , manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;'

    db.query(sql, (err, rows) => {
        if (err) {
            return;
        }
        console.log('\n\n');
        console.table(rows);
        console.log('\n\n');
        startPrompt();
    });
}
// View all roles
function viewRoles() {
    const sql = 'SELECT role.id, role.title, role.salary, role.department_id FROM role;'

    db.query(sql, (err, rows) => {
        if (err) {
            return;
        }
        console.log('\n\n');
        console.table(rows);
        console.log('\n\n');
        startPrompt();
    });
}
// View all departments
function viewDepartments() {
    const sql = 'SELECT department.id, department.name FROM department;'

    db.query(sql, (err, rows) => {
        if (err) {
            return;
        }
        console.log('\n\n');
        console.table(rows);
        console.log('\n\n');
        startPrompt();
    });
}

function Quit(){
    console.log("Goodbye!");
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
        console.log(`Server running on port ${PORT}`, '\n');
    });

    startPrompt();
});