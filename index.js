
const promptUser = require("./lib/prompt");


const intital = require("./lib/questions/initial");



// const handleInitResponse = async response => {
//     switch (response){
//         case "view all departments" : 
//             query.logTable("department");
//             break;
//         case "view all roles": 
//             query.logTable("role");
//             break;
//         case "view all employees":
//             query.logTable("employee");
//             break; 
//         case "add department": {
//                 const departmentToAdd = await promptUser(questions.departmentQuestions);
//                 query.addDepartment(departmentToAdd);
//             };
//             break;
//         case "add role": {
//             const roleToAdd = await promptUser(questions.roleQuestions);
//             query.addRole(roleToAdd);
//         };
//             break;
//         case "add employee":{
//             const employeeToAdd = await promptUser(questions.employeeQuestions);
//             query.addEmployee(employeeToAdd);
//         };
//             break;
//         case "update employee role": {
//             let employeeToUpdate = await promptUser(questions.updateEmployeeQuestions);
//             employeeToUpdate.table = "employee";
//             employeeToUpdate.column = "role_id";
            
//             query.updateInfo(employeeToUpdate);
//         }
//         default:
//             process.exit()
        
//     }

//     init();
// }

const handleInitResponse = async response => {
    switch (response){
        case "View" : 
            query.logTable("department");
            break;
        case "Add" : 
            query.logTable("department");
            break;
        case "Update" : 
            query.logTable("department");
            break;
        case "Delete" : 
            query.logTable("department");
            break;
        default:
            process.exit()
    }
}

const init = () => {
    console.clear();
    promptUser(intital.initial)
    .then((userInput) => {
        handleInitResponse(userInput.actionType)
        })
    .catch((error) => console.error(error))
}
init();

