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


// login user
userRouter.post("/login", (req, res) => {  
  if(!req.body || !req.body.userName || !req.body.password) {
      console.log('User Router | Bad Request | UserName or Password is empty');
      return res.status(400).send("Missing Login Details");
  }
  loginUser(req,res);  
});

// Add user
userRouter.post("/add", (req, res) => {
  const input = JSON.stringify(req.body);
  console.log(`Add users: ${input}`);
  if(!req.body.user){
    console.log('User Router | Bad Request | User details missing');
    return res.status(400).send("Missing User Details");
  } 
  registerUser(req,res);
});



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
userRouter.delete("/${id}",  (req, res) => {
  console.log(`Delete users: ${req.body}`);
  res.send("About users");
});

module.exports = userRouter;
