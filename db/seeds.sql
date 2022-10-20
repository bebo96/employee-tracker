INSERT INTO department (name, description)
VALUES
  ('IT Department', 'IT department is in charge of IT services, Network services, and Security'),
  ('R&D', 'R&D Department is in charge of product development, research, and support'),
  ('HR Department', 'HR is in charge of not much');

INSERT INTO employees (first_name, last_name, department_id, employee_role)
VALUES
  ('Ronald', 'Firbank', 1, 1),
  ('Virginia', 'Woolf', 1, 1),
  ('Piers', 'Gaveston', 1, 0),
  ('Charles', 'LeRoi', 2, 1),
  ('Katherine', 'Mansfield', 2, 1),
  ('Dora', 'Carrington', 3, 0),
  ('Edward', 'Bellamy', 3, 0),
  ('Montague', 'Summers', 3, 1),
  ('Octavia', 'Butler', 3, 1),
  ('Unica', 'Zurn', NULL, 1);

  INSERT INTO roles (role_name)
VALUES
  ('Engineer'),
  ('Manager'),
  ('Intern');