
const initialQuestion = {
type: 'list',
message: 'What would you like to do?',
name: 'actionType',
choices: ["view all departments", "view all roles", "view all employees", "add department", "add role", "add employee", "update employee role" , "quit"]
}

const departmentQuestions = [
    {
        type: 'input',
        name: "name",
        message: 'What is the name of the department?'
    }
]

const roleQuestions = [
    {
        type: 'input',
        name: "title", 
        message: 'What is the role\' title?'
    },
    {
        type: 'input',
        name: "salary", 
        message: 'What is the role\' salary?'
    },
    {
        type: 'input',
        name: "department_id", 
        message: 'What is the role\' department id?'
    }
]

const employeeQuestions = [
    {
        type: 'input',
        name: "first_name", 
        message: 'What is their first name?'
    },
    {
        type: 'input',
        name: "last_name", 
        message: 'What is their last name?'
    },
    {
        type: 'input',
        name: "role_id", 
        message: 'What is their role id?'
    },
    {
        type: 'input',
        name: "manager_id", 
        message: 'What is their managers\'s id?'
    }
]


const updateEmployeeQuestions = [
    {
        type: 'input',
        name: "newData", 
        message: 'What is their new role id?'
    },
    {
        type: 'input',
        name: "id", 
        message: 'What is their employee id?'
    }
]

module.exports = {
    initialQuestion,
    departmentQuestions,
    roleQuestions,
    employeeQuestions,
    updateEmployeeQuestions
}