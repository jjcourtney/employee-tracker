const { doQuery } = require("./query");

const deleteRow = (id, table) => {

    const sql = `DELETE FROM ${table} WHERE id = ${id};`

    doQuery(sql, "update")
}

module.exports = deleteRow;