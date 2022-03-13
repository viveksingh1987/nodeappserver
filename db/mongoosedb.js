//Import the mongoose module
var mongoose = require("mongoose");
var conf = require("../config");

//Set up default mongoose connection
//var mongoDB = "mongodb://127.0.0.1/my_database";

var db = "";
export default mongoose
  .connect(config.db.dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((client) => {
    //Get the default connection
    console.log("Connected with DB");
    return mongoose.connection;
  })
  .catch((err) => console.log("Failed to connect with Database. ", err));
