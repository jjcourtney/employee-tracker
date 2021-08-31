
const updateEmployee = [{
    type: 'list',
    message: 'What would part of employee would you like to update?',
    name: 'actionType',
    choices: ["manager", "role"]
}];

const updateEmployeesManager = [{
    type: 'input',
    name: "manager_id", 
    message: 'What is their new manager\'s id?',
    validate: input => typeof input === "number" ? false : true
    },
    {
    type: 'input',
    name: "id", 
    message: 'What is their employee id?',
    validate: input => typeof input === "number" ? false : true
}];

const updateEmployeesRole = [{
    type: 'input',
    name: "role_id", 
    message: 'What is their new role id?',
    validate: input => typeof input === "number" ? false : true
    },
    {
    type: 'input',
    name: "id", 
    message: 'What is their employee id?',
    validate: input => typeof input === "number" ? false : true
}];

module.exports = {
    updateEmployee,
    updateEmployeesManager,
    updateEmployeesRole
}
