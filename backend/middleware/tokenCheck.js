const jwt = require("jsonwebtoken");
const { CalcDataModel } = require("../models");

async function tokenCheck(req, res, next) {
  console.log("tokencheck");
  const token = req.headers?.authorization?.split(" ")[1] || null;
  console.log(token)
  if (token) {
    const { id } = jwt.verify(
      token,
      process.env.JWT_SECRET,
      function (err, decoded) {
        if (err instanceof jwt.TokenExpiredError) {
          res.status(401).json({
            status: "error",
            message: "401 Token expired",
            error: err,
          });
        } else if (err instanceof jwt.JsonWebTokenError) {
          res.status(403).json({
            status: "error",
            message: "403 Invalid Token",
            error: err,
          });
        }
        return decoded;
      }
    );
    if (!id) {
      res.status(403).json({
        status: "error",
        message: "403 Invalid Token",
      });
      return;
    }
    res.locals.token = token;
    res.locals.id = id;
    console.log(res.locals);
    next();
  } else {
    next();
  }
}

module.exports = tokenCheck;
