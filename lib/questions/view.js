
const view = [{
    type: 'list',
    message: 'What would you like view?',
    name: 'actionType',
    choices: ["employee", "roles", "departments"]
}];

const viewEmployees = [{
    type: 'list',
    message: 'How would you like to view employees?',
    name: 'actionType',
    choices: ["View all", "View by department"]
}];

const viewDepartment = [{
    type: 'list',
    message: 'How would you like to view departments?',
    name: 'actionType',
    choices: ["View all", "View department\'s budget"]
}];
