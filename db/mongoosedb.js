//Import the mongoose module
var mongoose = require("mongoose");
var conf = require("../config");

var  MongooseDB = () => { 
  mongoose
  .connect(conf.db.dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((client) => {
    //Get the default connection
    console.log("Connected with DB");
    //return mongoose.connection;
  })
  .catch((err) => console.log("Failed to connect with Database. ", err));
}

module.exports = MongooseDB;