const inquirer = require("inquirer");

const promptUser = questions => {
    return inquirer.prompt(questions);
  };

module.exports = promptUser;