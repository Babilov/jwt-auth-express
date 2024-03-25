const { validationResult } = require("express-validator");

const hasErrorsMidleware = async (req, res, next) => {
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = hasErrorsMidleware;