const mysql = require('mysql2');
const cTable = require('console.table');
require('dotenv').config();

const db = mysql.createConnection(
    {
      host: 'localhost',
      
      user: process.env.DB_USER,
 
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    },
    console.log(`Connected to the ${process.env.DB_NAME} database.`)
);

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
    
};

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

      db.end();      
=======
      console.log("Use arrow key to select next option")
      
    }
  });

}

module.exports = {
  logTable,
  doQuery
}

