
const promptUser = require("./lib/prompt");

const intital = require("./lib/questions/initial");

const { handleAdd } = require("./lib/handlers/add");
const { handleView } = require("./lib/handlers/view");
const { handleUpdate } = require("./lib/handlers/update");
const { handleDelete } = require("./lib/handlers/delete");

const handleInitResponse = async response => {
    switch (response){
        case "View" : handleView();
            break;
        case "Add" : handleAdd();
            break;
        case "Update" : handleUpdate();
            break;
        case "Delete" : handleDelete();
            break;
        default:
            process.exit()
    }
}

const askQuestions = () => {
    console.clear();
    promptUser(intital.initial)
    .then((userInput) => {
        handleInitResponse(userInput.actionType)
        })
    .catch((error) => console.error(error))
}
askQuestions();

