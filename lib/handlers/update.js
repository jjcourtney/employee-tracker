const promptUser = require("../../lib/prompt");
const getNextAction = require("./getNextAction")
const questions = require("../questions/update");
const updateInfo = require("../../query/update");


const updateEmployeesManager = async () => {
    const { manager_id, id } = await promptUser(questions.updateEmployeesManager);

    updateEmployees("manager_id", manager_id, id);

};

const updateEmployeesRole = async () => {
    const { role_id, id } = await promptUser(questions.updateEmployeesRole);

    updateEmployees("role_id", role_id, id);

};

const updateEmployees = (column, newData, id) => {
    updateObj = {
        table : "employee", 
        column , 
        newData, 
        id
    };
    updateInfo(updateObj);
};

const handleUpdate = async () => {
    const nextAction = await getNextAction(questions.updateEmployee)

    switch (nextAction) {
        case "manager": updateEmployeesManager();
            break;
        case "role": updateEmployeesRole();
            break;
    }
};

module.exports = {
    handleUpdate
}