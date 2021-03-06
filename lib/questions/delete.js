const del = [{
    type: 'list',
    message: 'What would you like delete?',
    name: 'actionType',
    choices: ["employee", "role", "department"]
}];

const deleteEmployeeById = [{
    type: 'input',
    name: "employeeId", 
    message: 'What is their id?',
    validate: input => typeof input === "number" ? false : true
}];

const deleteRoleById = [{
    type: 'input',
    name: "roleId", 
    message: 'What is the role\'s  id?',
    validate: input => typeof input === "number" ? false : true
}];

const deleteDepartmentById = [{
    type: 'input',
    name: "departmentId", 
    message: 'What is the departments\'s id?',
    validate: input => typeof input === "number" ? false : true
}];

module.exports = {
    del,
    deleteEmployeeById,
    deleteRoleById,
    deleteDepartmentById
}