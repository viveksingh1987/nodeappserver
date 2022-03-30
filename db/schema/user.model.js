var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserModelSchema = new Schema({
  userId: {
    type: String,
    min: [6, "Minimum 6 characters"],
    max: 15,
    required: [true, "userId is required"],
  },
  firstName:  {
    type: String,
    required: [true, "firstName is required"],
  },
  lastName:  {
    type: String,
    required: [true, "lastName is required"],
  },
  password:  {
    type: String,
    min: [6, "Minimum 6 characters"],
    max: 15,
    required: [true, "password is required"],
  },
  email:  {
    type: String,
    min: [6, "Minimum 6 characters"],
    max: 15,
    required: [true, "email is required"],
  },
  dob: Date,
  contactNumber:  {
    type: String,
    min: [6, "Minimum 6 characters"],
    max: 15,
    required: [true, "contactNumber is required"],
  },
});

var UserModel = mongoose.model("user", UserModelSchema);
module.exports = UserModel;
