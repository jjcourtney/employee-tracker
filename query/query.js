const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: process.env.DB_USER,
 
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    },
    console.log(`Connected to the movies_db database.`)
  );

const addEmp = empObj => {
  
  const {first_name, last_name, role_id, manager_id} = empObj;

  const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES ("${first_name}", "${last_name}", "${role_id}", "${manager_id}")`;
  
    doQuery(sql, "update");  
}

const addRole = addObj => {
  
  const {title, salary, department_id} = addObj;

  const sql = `INSERT INTO role (title, department_id)
    VALUES ("${title}", "${salary}", "${department_id}")`;
  
    doQuery(sql, "update");  
}

const addDepartment = addObj => {
  
  const {name} = addObj;

  const sql = `INSERT INTO employee (name)
    VALUES ("${name}")`;
    
    doQuery(sql, "update");  
}

const logTable = table => {

  const sql = `SELECT * FROM ${table}`;

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
      switch (type){
        case "log":  console.table(rows)
          break;
        case "update": cosole.log(`Updated ${rows.affectedRows} rows!`)
          break;
      }
       
    }
  
  });
}


module.exports = {
  addEmp,
  addRole,
  addDepartment,
  logTable,
  updateInfo
}