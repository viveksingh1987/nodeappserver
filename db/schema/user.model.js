var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserModelSchema = new Schema({
  userId: String,
  firstName: String,
  lastName: String,
  email: String,
  dob: Date,
  contactNumber: Number,
});

var UserModel = mongoose.model("UserModel", UserModelSchema);
module.exports = UserModel;
