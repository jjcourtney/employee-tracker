INSERT INTO department (name)
VALUES ("Front-end"),
       ("Back-end"),
       ("Tester"),
       ("UX");

INSERT INTO role (title, salary, department_id)
VALUES ("Front-end developer", 32321.00, 1),
       ("Back-end developer", 38000.00, 2),
       ("Unit tester", 26000.00, 3),
       ("End-to-end tester", 46000.00, 3),
       ("UX design", 32000.00, 4),
       ("Manager", 75000, 4);
 
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Joe", "Bloggs", 1, NULL),
       ("Jane", "Doe", 2, 1),
       ("John", "Smith", 2, 1),
       ("Joe", "Bloggs", 3, 3);
