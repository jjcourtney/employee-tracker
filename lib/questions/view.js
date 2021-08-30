
const view = [{
    type: 'list',
    message: 'What would you like view?',
    name: 'actionType',
    choices: ["employee", "role", "department"]
}];

const viewEmployees = [{
    type: 'list',
    message: 'How would you like to view employees?',
    name: 'actionType',
    choices: ["View all", "View by department"]
}];

const viewEmployeesByDepartment = [{
    type: 'input',
    name: "department_id", 
    message: 'What is the department\'s id?',
    validate: input => typeof input === "number" ? false : true
}];

const viewDepartment = [{
    type: 'list',
    message: 'How would you like to view departments?',
    name: 'actionType',
    choices: ["View all", "View department's budget"]
}];

const viewDepartmentsBudget = [{
    type: 'input',
    name: "department_id", 
    message: 'What is the department\'s id?',
    validate: input => typeof input === "number" ? false : true
}];

module.exports = {
    view,
    viewEmployees,
    viewEmployeesByDepartment,
    viewDepartment,
    viewDepartmentsBudget
}