INSERT INTO department (name)
VALUES
  ('IT Department'),
  ('R&D'),
  ('HR Department');

INSERT INTO employees (first_name, last_name, role_id, manager_id)
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

  INSERT INTO roles (job_title, department_id, salary)
VALUES
  ('Engineer',2, 100000),
  ('Manager',1,130000),
  ('Intern',3,50000);

