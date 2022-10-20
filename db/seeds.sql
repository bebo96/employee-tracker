INSERT INTO department (name)
VALUES
  ('IT Department'),
  ('R&D'),
  ('HR Department');

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Ronald', 'Firbank', 1, 1),
  ('Virginia', 'Woolf', 1, 1),
  ('Piers', 'Gaveston', 1, 2),
  ('Charles', 'LeRoi', 2, 2),
  ('Katherine', 'Mansfield', 2, 2),
  ('Dora', 'Carrington', 3, 2),
  ('Edward', 'Bellamy', 3, 3),
  ('Montague', 'Summers', 3, 3),
  ('Octavia', 'Butler', 3, 3),
  ('Unica', 'Zurn', 2, 3);

  INSERT INTO role (title, salary, department_id)
VALUES
  ('Engineer',100000, 2),
  ('Manager',130000, 1),
  ('Intern',50000, 3);

