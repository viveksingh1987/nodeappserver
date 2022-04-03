var mongoosedb = require("../db/mongoosedb");
var UserModelSchema = require("../db/schema/user.model");

/**
 * Service to find user in Database
 * @param {*} userId
 * @returns
 */
const findUser = async (userId) => {
  return await UserModelSchema.find({ userId: userId });
};

/**
 * Service to add user in Database
 * @param {*} user
 * @returns
 */
const addUser = async (user) => {
  return await UserModelSchema.create(user);
};

module.exports = { findUser, addUser };
