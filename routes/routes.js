const express = require("express");
const globalRouter = express.Router();
const userRouter = require("./user.routes");

// User Routes
globalRouter.use("/user", userRouter);

module.exports = globalRouter;