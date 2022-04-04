const express = require("express");
const bodyParser = require("body-parser");

//Internal imports
const config = require("./config");
const globalRouter = require("./routes/routes");
const { mongooseDBConnect } = require("./db/mongoosedb");


// Define global variables
const app = express();
const port = config.app.port;
app.use(bodyParser.json());
mongooseDBConnect();

//*********************************************** */ Routes
app.use("/", globalRouter);


//*********************************************** */ Start Server
app.listen(port, () => {
  console.log(`App server is up and running and listening on port ${port}`);
});
