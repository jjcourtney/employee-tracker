
const initialQuestion = {
type: 'list',
message: 'What would you like to do?',
name: 'actionType',
choices: ["view all departments", "view all roles", "view all employees", "add department", "add role", "add employee", "update employee role"]
}

module.exports = {
    initialQuestion
}