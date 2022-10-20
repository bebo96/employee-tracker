DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS employee;

CREATE TABLE department (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30)
);

CREATE TABLE role (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(8,2) NOT NULL,
  department_id INTEGER,
  FOREIGN KEY (department_id) REFERENCES department(id) 
);

CREATE TABLE employee (
  e_id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER NOT NULL,
  manager_id INTEGER NOT NULL,
  FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE SET NULL
  FOREIGN KEY (manager_id) REFERENCES employee(e_id) ON DELETE SET NULL
);

-- goal is to query the following: 
-- employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to