const express = require("express");

const userRouter = express.Router();

// middleware that is specific to this router
userRouter.use((req, res, next) => {
  console.log("Time: ", new Date(Date.now()).toLocaleString());
  next();
});

// Find user with Id
userRouter.get("/{id}", (req, res) => {
  console.log(`Finding User details with id: ${id}`);
  res.send("Find users");
});

// Add user
userRouter.post("/add", (req, res) => {
  const input = JSON.stringify(req.body);
  console.log(`Add users: ${input}`);
  res.send("Add users");
});

// Update user
userRouter.put("/update", (req, res) => {
  console.log(`Update users: ${req.body}`);
  res.send("About users");
});

// Delete user
userRouter.delete("/${id}", (req, res) => {
  console.log(`Delete users: ${req.body}`);
  res.send("About users");
});

module.exports = userRouter;
