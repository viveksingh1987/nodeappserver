const express = require("express");

const userRouter = express.Router();

// middleware that is specific to this router
userRouter.use((req, res, next) => {
  console.log("Time: ", new Date(Date.now()).toLocaleString());
  next();
});

userRouter.get("/about", (req, res) => {
  res.send("About users");
});

module.exports = userRouter;
