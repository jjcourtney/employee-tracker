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

const getUpdateSqlEmp = updateObj => {
  
  const {first_name, last_name, role_id, manager_id} = updateObj;

  const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES ("${first_name}", "${last_name}", "${role_id}", "${manager_id}")`;
  
    doQuery(sql);  
}


const logTable = (table) => {

  const sql = `SELECT * FROM ${table}`;
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

// const testObj = {
//   first_name: "Peter",
//   last_name: "Parker",
//   role_id: 3,
//   manager_id: 1
// }
// console.log(getUpdateSqlEmp(testObj))
logTable("role") 