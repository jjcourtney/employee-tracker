const addRole = addObj => {
  
    const {title, salary, department_id} = addObj;
  
    const sql = `INSERT INTO role (title, salary, department_id)
      VALUES ("${title}", "${salary}", "${department_id}")`;
    
      doQuery(sql, "update");  
  }

  const addEmployee = empObj => {
  
    const {first_name, last_name, role_id, manager_id} = empObj;
  
    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
      VALUES ("${first_name}", "${last_name}", "${role_id}", "${manager_id}")`;
    
      doQuery(sql, "update");  
  }
  
  
  const addDepartment = addObj => {
    
    const {name} = addObj;
    console.log(addObj)
    const sql = `INSERT INTO department (name)
      VALUES ("${name}")`;
      
      doQuery(sql, "update");  
  }