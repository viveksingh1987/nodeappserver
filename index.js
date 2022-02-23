const express = require("express");

//Internal imports
const config = require("./config");

// Define global variables
const app = express();
const port = config.app.port;

app.get("/", (req, res) => {
  res.send("Hellow world");
});

app.listen(port, () => {
  console.log(`App server is up and running and listening on port ${port}`);
});
