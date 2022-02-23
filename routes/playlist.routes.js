const express = require("express");

const playlistRouter = express.Router();

// middleware that is specific to this router
playlistRouter.use((req, res, next) => {
  console.log("Time: ", new Date(Date.now()).toLocaleString());
  next();
});

playlistRouter.get("/about", (req, res) => {
  res.send("About playlist");
});

module.exports = playlistRouter;
