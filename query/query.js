const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection(
    {
      host: 'localhost',
      
      user: process.env.DB_USER,
 
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    },
    console.log(`Connected to the movies_db database.`)
  );

const addEmployee = empObj => {
  
  const {first_name, last_name, role_id, manager_id} = empObj;

  const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES ("${first_name}", "${last_name}", "${role_id}", "${manager_id}")`;
  
    doQuery(sql, "update");  
}

const addRole = addObj => {
  
  const {title, salary, department_id} = addObj;

  const sql = `INSERT INTO role (title, salary, department_id)
    VALUES ("${title}", "${salary}", "${department_id}")`;
  
    doQuery(sql, "update");  
}

const addDepartment = addObj => {
  
  const {name} = addObj;
  console.log(addObj)
  const sql = `INSERT INTO department (name)
    VALUES ("${name}")`;
    
    doQuery(sql, "update");  
}

const logTable = table => {
  let sql;
  switch (table){
    case "role": 
      sql = `SELECT role.id AS Role_ID,
            role.title AS Role_Title,
            role.salary AS Salary, 
            role.department_id AS Department_ID , 
            department.id AS Department_ID, 
            department.name AS Department_Name
            FROM role 
            LEFT JOIN department 
            ON role.department_id = department.id`
      break;
    case "department": 
      sql = "SELECT * FROM department"
      break;
    case "employee": 
      sql = `SELECT employee.id AS Employee_ID, 
            employee.first_name AS First_Name,
            employee.last_name AS Last_Name,
            employee.role_id As Role_ID,
            employee.manager_id As Manager_ID,
            role.title AS Role_title,
            role.salary AS Salary, 
            role.id As Role_ID, 
            department.id AS Department_ID
            FROM employee
            LEFT JOIN role 
            ON employee.role_id = role.id 
            LEFT JOIN department 
            ON role.department_id = department.id`
      break;
  }
  
  
  doQuery(sql, "log");
  
  }

const updateInfo = updateObj => {
  const {table, column, newData, id} = updateObj;
  const sql = `UPDATE ${table} SET ${column} = ${newData} WHERE id = ${id}`;

  doQuery(sql, "log");

}


const doQuery = (sql, type) => {
  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err)
    }else {
      console.log("\n")
      console.clear()
      switch (type){
        case "log":  console.table(rows)
          break;
        case "update": console.log(`Updated ${rows.affectedRows} row(s)!`)
          break;
      }
      console.log("Use arrow key to select next option")
       
    }
  
  });
}


module.exports = {
  addEmployee,
  addRole,
  addDepartment,
  logTable,
  updateInfo
}