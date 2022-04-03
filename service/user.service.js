var mongoosedb = require("../db/mongoosedb");
var UserModelSchema = require("../db/schema/user.model");

const findUser = async (userId) => {
  return await UserModelSchema.find({ userId: userId });
};

module.exports = { findUser };
