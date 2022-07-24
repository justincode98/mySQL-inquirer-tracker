INSERT INTO department
  (name)
VALUES
  ('Silly Walks'),
  ('Serious Walks'),
  ('Walks');


INSERT INTO role
  (title, salary, department_id)
VALUES
  ('hop', 100, 2),
  ('skip', 200, 1),
  ('jump', 300, 1),
  ('kick', 400, 2);

INSERT INTO employee
  (first_name, last_name, role_id)
VALUES
('John', 'Smith', 1);
INSERT INTO employee
  (first_name, last_name, role_id, manager_id)
VALUES
  ('Ronald', 'Firbank', 1, 1),
  ('Virginia', 'Woolf', 1, 1),
  ('Piers', 'Gaveston', 1, 2),
  ('Charles', 'LeRoi', 2, 1),
  ('Katherine', 'Mansfield', 2, 1),
  ('Dora', 'Carrington', 3, 2),
  ('Edward', 'Bellamy', 3, 2),
  ('Montague', 'Summers', 3, 1),
  ('Octavia', 'Butler', 3, 1),
  ('Unica', 'Zurn', 1, 1);

  