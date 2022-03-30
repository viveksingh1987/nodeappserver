const MongoClient = require("mongodb").MongoClient;
const config = require("./config");

export default MongoClient.connect(config.db.dbURL,  { useNewUrlParser: true, useUnifiedTopology: true })
  .then((client) => {    
    console.log("Connected with DB");
    return MongoClient.client;
  })
  .catch((err) => console.log("Failed to connect with Database. ", err));