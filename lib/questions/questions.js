
const initialQuestion = {
type: 'list',
message: 'What would you like to do?',
name: 'actionType',
choices: ["view all departments", "view all roles", "view all employees", "add department", "add role", "add employee", "update employee role" , "quit"]
}




const initial = [{
    type: 'list',
    message: 'What would you like to do?',
    name: 'actionType',
    choices: ["View", "Add", "Update", "Delete", "Quit"]
}];





module.exports = {
    initialQuestion,
    departmentQuestions,
    roleQuestions,
    employeeQuestions,
    updateEmployeeQuestions
}







/*
view
    employees
        all > function
        by department 
            which department > (input)  function **add select fuction for question
    roles > function
    departments
        all > function
        budget
            which department > (input)  function **add select fuction for question
add
    employee > (input) function
    role > (input) function
    department > (input) function

update employees'
    manager 
    role

delete
    departments
    roles
    employee



*/