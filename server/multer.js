const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "static/");
  },
  filename: function (req, file, cb) {
    cb(null, uuid.v4() + ".jpg");
  },
});

module.exports = multer({ storage });
