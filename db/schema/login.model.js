var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var LoginModelSchema = new Schema({
  userId: {
    type: String,
    min: [6, "Minimum 6 characters"],
    max: 15,
    required: [true, "You can not register without userid"],
  },
  password: {
    type: String,
    min: [6, "Minimum 6 characters"],
    max: 15,
    required: [true, "You can not register without password"],
  },
  email: String,
  refreshToken: String,
  accessToken: String,
});

var LoginModel = mongoose.model("LoginModel", LoginModelSchema);
module.exports = LoginModel;
