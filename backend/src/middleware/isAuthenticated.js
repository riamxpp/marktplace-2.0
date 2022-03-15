const { verify } = require("jsonwebtoken");

const isAuthenticated = (req, res, next) => {
  try {
    const token = req.headers.authorization.replace("Bearer ", "");
    const validateToken = verify(token, '43543jsdwef');
    req["tokenData"] = validateToken;
    next();
  } catch (err) {
    return res.status(401).json("Unauthorized");
  }
};

module.exports = { isAuthenticated };
