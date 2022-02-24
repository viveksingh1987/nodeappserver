const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;

//Internal imports
const config = require("./config");
const userRouter = require("./routes/user.routes");
const playlistRouter = require("./routes/playlist.routes");

// Define global variables
const app = express();
const port = config.app.port;
app.use(bodyParser.json());

MongoClient.connect(config.db.dbURL, { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db("Cluster0");
    const userCollection = db.collection("user");

    userCollection
      .insertOne({ name: "vivek" })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.error(error));

    console.log("Connected with DB");
  })
  .catch((err) => console.log("Failed to connect with Database. ", err));

app.get("/", (req, res) => {
  res.send("Hellow world");
});

// User Routes
app.use("/user", userRouter);

// Playlist Routes
app.use("/playlist", playlistRouter);

app.listen(port, () => {
  console.log(`App server is up and running and listening on port ${port}`);
});
