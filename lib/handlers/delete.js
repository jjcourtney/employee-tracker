const promptUser = require("../../lib/prompt");
const getNextAction = require("./getNextAction")
const questions = require("../questions/delete");
const deleteRow = require("../../query/delete");

const deleteEmployeeById = async () => {
    const { employeeId } = await promptUser(questions.deleteEmployeeById);
    
    deleteRow(employeeId, "employee");
};

const deleteRoleById = async () => {
    const  { roleId } = await promptUser(questions.deleteRoleById);
    
    deleteRow(roleId, "role");
};

const deleteDepartmentById = async () => {
    const { departmentId } = await promptUser(questions.deleteDepartmentById);
    
    deleteRow(departmentId, "department");
};

const handleDelete = async () => {
    const nextAction = await getNextAction(questions.del)

    switch (nextAction) {
        case "employee": deleteEmployeeById();
            break;
        case "role": deleteRoleById();
            break;
        case "department": deleteDepartmentById();
            break;
    }
};

module.exports = {
    handleDelete
}
