const promptUser = require("../../lib/prompt");
const getNextAction = require("./getNextAction")
const questions = require("../questions/view");
const query = require("../../query/view");

const viewEmployeesByDepartment = async () => {
    const {department_id} = await promptUser(questions.viewEmployeesByDepartment)
    
    query.viewEmployeesByDepartment(department_id)
};

const viewEmployees = async () => {
    const nextAction = await getNextAction(questions.viewEmployees);

    switch (nextAction) {
        case "View all": query.view("employee");
            break;
        case "View by department": viewEmployeesByDepartment();
            break;
    }
};

const viewDepartmentsBudget = async () => {
    const departmentId = await promptUser(questions.viewDepartmentsBudget);

    query.viewDepartmentsBudget(departmentId);
};

const viewDepartment = async () => {
    const nextAction = await getNextAction(questions.viewDepartment);

    switch (nextAction) {
        case "View all": query.view("department");
            break;
        case "View department's budget": viewDepartmentsBudget();
            break;
    }
};

const handleView = async () => {
    const nextAction = await getNextAction(questions.view);

    switch (nextAction) {
        case "employee": viewEmployees();
            break;
        case "role": query.view("role");
            break;
        case "department": viewDepartment();
            break;
    }
    return;
};

module.exports = {
    handleView
}


