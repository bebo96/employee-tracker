const db = require('./db/connection');
const inquirer = require('inquirer');
const cTable = require('console.table');

console.log("***********************************")
console.log("                                   ")
console.log("                                   ")
console.log("        EMPLOYEE TRACKER           ")
console.log("                                   ")
console.log("                                   ")
console.log("***********************************")
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
            } else if (answers.choices === "Quit") {
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

// Add a department
function addDepartment() {
    let param;
    inquirer
        .prompt([{
            type: 'input',
            name: 'choices',
            message: 'Please enter department name: '
        }, ])
        .then(answers => {
            param = answers.choices;
            const sql = 'INSERT INTO department (name) VALUES (?)'
            db.query(sql, param, (err, rows) => {
                if (err) {
                    return;
                }
                console.log('\n\n');
                console.log(param + " has been added. ");
                // console.table(rows);
                console.log('\n\n');
                startPrompt();
            });
        });
}
function Quit() {
    console.log("Goodbye!");
    process.exit();

}
// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    startPrompt();
});