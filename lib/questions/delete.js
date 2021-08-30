const del = [{
    type: 'list',
    message: 'What would you like delete?',
    name: 'actionType',
    choices: ["employee", "roles", "departments"]
}];

const deleteEmployeeById = [{
    type: 'input',
    name: "employee_id", 
    message: 'What is their id?',
    validate: input => typeof input === "number" ? false : true
}];

const deleteRoleById = [{
    type: 'input',
    name: "role_id", 
    message: 'What is the role\'s  id?',
    validate: input => typeof input === "number" ? false : true
}];

const deleteDepartmentById = [{
    type: 'input',
    name: "department_id", 
    message: 'What is the departments\'s id?',
    validate: input => typeof input === "number" ? false : true
}];

module.exports = {
    del,
    deleteEmployeeById,
    deleteRoleById,
    deleteDepartmentById
}