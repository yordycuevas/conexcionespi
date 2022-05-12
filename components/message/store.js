const db = require("mongoose");
const Model = require("./model");

db.Promise = global.Promise;
db.connect(
  "mongodb+srv://darkdemony:darkdemony123@cluster0.ki4b8.mongodb.net/deahtstar?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);


console.log("[db] connected to mongodb");

function addMessage(message) {
  //   list.push(message);
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessage(filterUser) {
    let filter = {};
    if (!filterUser !== null){
        filter = {user: filterUser};
    }
  const messages = await Model.find(filter);
    return messages;
  
}

async function updateText(id, message) {
  const foundMessage = await Model.findOne({
    _id: id,
  });

  foundMessage.message = message;

  const newMessage = await foundMessage.save();
  return newMessage;
}

function removeMessage(id) {
    return Model.deleteOne({_id: id
    });
}




module.exports = {
  add: addMessage,
  list: getMessage,
  updateText: updateText,
    remove: removeMessage,
  // get
  // delete
  // update
};
