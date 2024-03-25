const jwt = require("jsonwebtoken");
const errors = require("../utils/consts/errorConsts");

const SECKRET_KEY = process.env.SECKRET_KEY;

const isAuthed = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).send({ error: errors.ERROR_NOT_AUTHED });
  }
  jwt.verify(token, SECKRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: errors.ERROR_BAD_TOKEN });
    req.user = user;
    next();
  });
};

module.exports = isAuthed;
