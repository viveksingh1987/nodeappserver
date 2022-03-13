const { JsonWebTokenError } = require("jsonwebtoken");
const { restart } = require("nodemon");

const welcome = (req, res) => {
  const token = req.cookie.token;
  if (!token) {
    return res.status(401).end();
  }

  var payload;
  try {
    payload = jwt.verify(token, "my_secret_key");
  } catch (e) {
    if (e instanceof jwt.JsonWebTokenError) {
      return res.status(401).end();
    }
    return res.status(400).end();
  }

  rest.send(`Welcome ${payload.username}`);
};

module.exports = welcome;
