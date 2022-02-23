const express = require("express");

//Internal imports
const config = require("./config");
const userRouter = require("./routes/user.routes");
const playlistRouter = require("./routes/playlist.routes");

// Define global variables
const app = express();
const port = config.app.port;

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
