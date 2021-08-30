const updateInfo = updateObj => {
    const {table, column, newData, id} = updateObj;
    const sql = `UPDATE ${table} SET ${column} = ${newData} WHERE id = ${id}`;
  
    doQuery(sql, "log");
  
  }