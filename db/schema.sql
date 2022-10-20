DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employees;

CREATE TABLE department (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE roles (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  job_title VARCHAR(30) NOT NULL,
  department_id INTEGER,
  salary VARCHAR(30) NOT NULL,
  FOREIGN KEY (department_id) REFERENCES department(id) 
);

CREATE TABLE employees (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER NOT NULL,
  manager_id INTEGER NOT NULL,
  FOREIGN KEY (manager_id) REFERENCES employees(id) ON DELETE SET NULL
);

-- goal is to query the following: 
-- employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to