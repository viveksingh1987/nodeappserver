const express = require("express");

// Import Internal dependency
const { loginUser, registerUser } = require("../controller/user.controller");
const { verifyToken } = require("../common/utils");

const userRouter = express.Router();

// middleware that is specific to this router
userRouter.use((req, res, next) => {
  console.log("User Router | Time: ", new Date(Date.now()).toLocaleString());
  next();
});

/**
 * Login User
 */
userRouter.post("/login", loginUser);

/**
 * Register User
 */
userRouter.post("/add", registerUser);

// Find user with Id
userRouter.get(`/{id}`, verifyToken, (req, res) => {
  console.log(`Finding User details with id: ${id}`);
  res.send("Find users");
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
