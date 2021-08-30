const promptUser = require("../../lib/prompt");

const getNextAction = async question => {
    const nextAction = await promptUser(question);
    return nextAction.actionType;
};

module.exports = getNextAction;