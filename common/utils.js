var jwt = require('jsonwebtoken');

const generateToken = (body) => {
    return jwt.sign(body,"SECRET_KEY",{expiresIn:"2h"});
}

const verifyToken = (req,res,next) => {
    const token = req.body.token || req.query.token || req.headers["x-access-token"];
    if (!token) {
        console.log("No Token Found | Error 403");
        return res.status(403).send("A token is required for authentication");
    }
    try {
        const decoded = jwt.verify(token, config.TOKEN_KEY);
        req.user = decoded;
    } catch (err) {
        console.log("Not able to decode Token | Error 401");
       return res.status(401).send("Invalid Token");
    }
    return next();    
}


module.exports = { generateToken, verifyToken };