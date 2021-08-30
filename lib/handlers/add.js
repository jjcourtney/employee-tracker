const promptUser = require("../../lib/prompt");
const getNextAction = require("./getNextAction")
const questions = require("../questions/add");
const query = require("../../query/add");

const addEmployee = async () => {
    const employeeObj = await promptUser(questions.addEmployee);
    
    query.addEmployee(employeeObj);
};

const addRole = async () => {
    const roleObj = await promptUser(questions.addRole);
    
    query.addRole(roleObj);
};

const addDepartment = async () => {
    const departmentObj = await promptUser(questions.addDepartment);
    
    query.addDepartment(departmentObj);
};

const handleAdd = async () => {
    const nextAction = await getNextAction(questions.add)

    switch (nextAction) {
        case "employee": addEmployee();
            break;
        case "roles": addRole();
            break;
        case "department": addDepartment();
            break;
    }
};

module.exports = {
    handleAdd
}


