const jwt = require("jsonwebtoken");

const jwt_key = "my_secret_key";
const jwt_key_expiry_sec = 60;

const users = {
  user1: "password1",
  user2: "password2",
};

const singin = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password || users[username] !== password) {
    return res.status(401).end();
  }

  // creates a new token with username in the payload and expires in 60 sec

  const token = jwt.sign({ username }, jwt_key, {
    algorithm: "HS256",
    expiresIn: jwt_key_expiry_sec,
  });

  console.log("*************** JWT Token : ", token);
  res.cookie("token", token, { maxAge: jwt_key_expiry_sec * 1000 });
  res.send;
};

module.exports = singin;
