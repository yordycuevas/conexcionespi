const db = require("mongoose");

db.Promise = global.Promise;

// "mongodb+srv://darkdemony:darkdemony123@cluster0.ki4b8.mongodb.net/deahtstar?retryWrites=true&w=majority"
async function connect(url) {
  await db.connect(
    url,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  console.log("[db] connected to mongodb");
};

module.exports =connect;