const promptUser = require("./lib/prompt");

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
}

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

    const nextAction = await promptUser(questions.viewEmployeesByDepartment)

    switch (nextAction) {
        case "View all": query.view("employee");
            break;
        case "View by department": ;
            break;
    }
};

const getNextAction = async question => {
    const nextAction = await promptUser(questions);
    return nextAction.actionType;
}