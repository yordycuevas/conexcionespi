const Model = require("./model");

function addUser(user) {
    const myUser = new Model(user);
    return myUser.save();
} 

async function getUser(filterUser) {
    let filter = {};
    if (filterUser !== null) {
        filter = { user: filterUser };
    }
    const user = await Model.find(filter);
    return user;
}

module.exports = {
    add: addUser,
    list: getUser,
}