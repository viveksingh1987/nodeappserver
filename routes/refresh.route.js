const refresh = (req, res) => {
  const token = req.cookie.token;
  if (!token) {
    return res.status(401).end();
  }

  var payload;
  try {
    payload = jwt.verify(token, "my_secret_key ");
  } catch (e) {
    if (e instanceof jwt.JsonWebTokenError) {
      return res.status(401).end();
    }
    return res.status(400).end();
  }

  // We ensure that a new token is not issued until enough time has elapsed
  // In this case, a new token will only be issued if the old token is within
  // 30 seconds of expiry. Otherwise, return a bad request status
  const nowUnixSeconds = Math.round(Number(new Date()) / 1000);
  if (payload.exp - nowUnixSeconds > 30) {
    return res.status(400).end();
  }

  // Now, create a new token for the current user, with a renewed expiration time
  const newToken = jwt.sign({ username: payload.username }, jwtKey, {
    algorithm: "HS256",
    expiresIn: jwtExpirySeconds,
  });

  // Set the new token as the users `token` cookie
  res.cookie("token", newToken, { maxAge: jwtExpirySeconds * 1000 });
  res.end();
};

module.exports = refresh;
