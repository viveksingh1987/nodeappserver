var mongoosedb = require("../db/mongoosedb");
var UserModelSchema = require("../db/schema/user.model");

/**
 * 
 * @param {*} userId 
 * @returns 
 */
const findUser = async (userId) => {
  return await UserModelSchema.find({ userId: userId });
};

const addUser = async (userId) => {
  return await UserModelSchema.save({ userId: userId });
};

module.exports = { findUser };
