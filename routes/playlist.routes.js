const express = require("express");

const playlistRouter = express.Router();

// middleware that is specific to this router
playlistRouter.use((req, res, next) => {
  console.log("Time: ", new Date(Date.now()).toLocaleString());
  next();
});

// Find Paylist with Id
playlistRouter.get("/{id}", (req, res) => {
  console.log(`Finding playlist details with id: ${id}`);
  res.send("Find Playlist");
});

// Add user
playlistRouter.post("/add", (req, res) => {
  console.log(`Add playlist: ${req.body}`);
  res.send("Add Playlist");
});

// Update user
playlistRouter.put("/update", (req, res) => {
  console.log(`Update playlist: ${req.body}`);
  res.send("Update playlist");
});

// Delete user
playlistRouter.delete("/${id}", (req, res) => {
  console.log(`Delete playlist: ${req.body}`);
  res.send("Delete Playlist");
});

module.exports = playlistRouter;
