const express = require("express");

const loginRouter = express.Router();

// middleware that is specific to this router
// loginRouter.use((req, res, next) => {
//   console.log("Time: ", new Date(Date.now()).toLocaleString());
//   next();
// });

// loginRouter.post("/auth", (req, res) => {
//   console.log("Login user with credentials");

//   res.send("Login success");
// });

// loginRouter.post("/reset", (req, res) => {
//   console.log("Reset User Account");
//   res.send("Reset done");
// });

// loginRouter.post("/exit", (req, res) => {
//   console.log("Logout the user");
//   res.send("Logout success");
// });
