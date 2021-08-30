
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
        all > query
        by department 
            which department
                (input) > query
    roles > query
    departments
        all > query
        budget
            (input) > query
add
    employee
        (input) > query
    role
        (input) > query
    department
        (input) > query

update employees'
    manager
        (input) > query
    role
        (input) > query

delete
    departments
        (input) > query
    roles
        (input) > query
    employee
        (input) > query
*/