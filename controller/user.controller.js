var mongoosedb = require("../db/mongoosedb");
var { generateToken } = require("../common/utils");
var UserModelSchema = require("../db/schema/user.model");
var { findUser } = require("../service/user.service");

/**
 * Login User Controller
 * @param {*} req
 * @param {*} res
 * @returns
 */
const loginUser = async (req, res) => {
  const { userName, password } = req.body;

  if (!userName || !password) {
    console.log("User Router | Bad Request | UserName or Password is empty");
    return res.status(400).json({ message: "username and password required" });
  }

  var user = findUser(userName);
  console.log("User from DB", user);

  if (!user) {
    return res.status(401).json({ message: "No user with matching username" });
  }

  if (user.password !== password) {
    return res.status(401).json({ message: "Wrong password" });
  }

  return res.status(201).json(user);
};

/**
 * Register User Controller
 * @param {*} req
 * @param {*} res
 * @returns
 */
const registerUser = async (req, res) => {
  try {
    var user = await UserModelSchema.create(req.body.user);
    return res.status(201).send(user);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send(error.message);
  }
};

module.exports = { loginUser, registerUser };
