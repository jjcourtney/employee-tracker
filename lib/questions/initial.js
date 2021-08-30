
const initial = [{
    type: 'list',
    message: 'What would you like to do?',
    name: 'actionType',
    choices: ["View", "Add", "Update", "Delete", "Quit"]
}];

module.exports = {
    initial
}

/*
view
    employees
        all > function
        by department 
            which department > (input)  function 
    roles > function
    departments
        all > function
        budget
            which department > (input)  function 
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