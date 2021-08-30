const add = [{
    type: 'list',
    message: 'What would you like add?',
    name: 'actionType',
    choices: ["employee", "role", "department"]
}];

const addRole = [{
        type: 'input',
        name: "title", 
        message: 'What is the role\' title?',
        validate: input => input === "" ? false : true
    },
    {
        type: 'input',
        name: "salary", 
        message: 'What is the role\' salary?',
        validate: input => typeof input === "number" ? false : true
    },
    {
        type: 'input',
        name: "department_id", 
        message: 'What is the role\' department id?',
        validate: input => typeof input === "number" ? false : true
}];

const addEmployee = [{
        type: 'input',
        name: "first_name", 
        message: 'What is their first name?',
        validate: input => input === "" ? false : true
    },
    {
        type: 'input',
        name: "last_name", 
        message: 'What is their last name?',
        validate: input => input === "" ? false : true
    },
    {
        type: 'input',
        name: "role_id", 
        message: 'What is their role id?',
        validate: input => typeof input === "number" ? false : true
    },
    {
        type: 'input',
        name: "manager_id", 
        message: 'What is their managers\'s id?',
        validate: input => typeof input === "number" ? false : true
}];

const addDepartment = [{
        type: 'input',
        name: "name",
        message: 'What is the name of the department?'
}];

module.exports = {
    add,
    addRole,
    addEmployee,
    addDepartment
}