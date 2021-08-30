const promptUser = require("./lib/prompt");
const getNextAction = require("./getNextAction")
const questions = require("../questions/view");
const query = require("../../query/view");

const handleView = async () => {
    const nextAction = await getNextAction(questions.view)

    switch (nextAction) {
        case "employee": viewEmployees();
            break;
        case "roles": query.view("role");
            break;
        case "department":{

        }
            break;
    }
};

const viewEmployees = async () => {
    const nextAction = await getNextAction(questions.viewEmployees)

    switch (nextAction) {
        case "View all": query.view("employee");
            break;
        case "View by department": ;
            break;
    }
};

const viewEmployeesByDepartment = async () => {

    const nextAction = await promptUser(questions.viewEmployeesByDepartment);

    switch (nextAction) {
        case "View all": query.view("employee");
            break;
        case "View by department": {
            const {department_id} = await promptUser(questions.viewEmployeesByDepartment)
            viewEmployeesByDepartment(department_id)
        };
            break;
    }
};

const viewDepartment = async () => {
    const nextAction = await promptUser(questions.viewDepartment);

    switch (nextAction) {
        case "View all": query.view("department");
            break;
        case "View department's budget": {
            
        };
            break;
    }
};



