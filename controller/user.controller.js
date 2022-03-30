var mongoosedb = require('../db/mongoosedb');
var { generateToken }= require('../common/utils');
var UserModelSchema = require("../db/schema/user.model");

const loginUser = async (req, res) => {
    const userName = req.body.userName;
    const password = req.body.password;

    var user = await UserModelSchema.find({userId: userName, password: password});
    console.log('User from DB', user);
    if(user) {
        return res.status(200).send(user);
    } else {
        return res.status(404).send("Not Found");
    }
}

const registerUser = async (req, res) => {
    try {
        var user = await UserModelSchema.create(req.body.user);
        return res.status(201).send(user);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send(error.message);
    }
}

module.exports = { loginUser , registerUser };

