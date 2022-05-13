const express = require("express");

// const bodyParser = require("body-parser");

const db = require("./db");


// const router = require("./components/message/network.js");
const router = require("./network/routes.js");

db("mongodb+srv://darkdemony:darkdemony123@cluster0.ki4b8.mongodb.net/deahtstar?retryWrites=true&w=majority");

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(router);

router(app);

app.use("/app", express.static("./public"));

app.listen(3000);
console.log("Server running on port http://localhost:3000");
