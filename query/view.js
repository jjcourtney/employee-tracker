const query = require("./query");

const view = table => query.logTable(table);


const viewEmployeesByDepartment = departmentId => {
    const sql = `SELECT employee.id AS Employee_ID, 
    employee.first_name AS First_Name,
    employee.last_name AS Last_Name,
    employee.role_id As Role_ID,
    employee.manager_id As Manager_ID,
    role.title AS Role_title,
    role.salary AS Salary, 
    role.id As Role_ID, 
    department.id AS Department_ID 
    FROM employee 
    LEFT JOIN (SELECT * FROM role
    WHERE department_id = ${departmentId }) AS role
    ON employee.role_id = role.id 
    LEFT JOIN department 
    ON role.department_id = department.id
    WHERE role.department_id = ${departmentId}`
                
    query.doQuery(sql, "log")
};

const viewDepartmentsBudget = departmentId => {
    const sql = `SELECT SUM (Salary)
    FROM (SELECT employee.id AS Employee_ID, 
        employee.first_name AS First_Name,
        employee.last_name AS Last_Name,
        employee.role_id As Role_ID,
        employee.manager_id As Manager_ID,
        role.title AS Role_title,
        role.salary AS Salary, 
        role.id As Roles_ID, 
        department.id AS Department_ID 
        FROM employee 
        LEFT JOIN (SELECT * FROM role
        WHERE department_id = ${departmentId }) AS role
        ON employee.role_id = role.id 
        LEFT JOIN department 
        ON role.department_id = department.id
        WHERE role.department_id = ${departmentId}) AS total` 

    query.doQuery(sql, "log")
};


module.exports = {
    view,
    viewEmployeesByDepartment,
    viewDepartmentsBudget
}

