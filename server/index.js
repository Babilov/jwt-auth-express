require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const db = require("./db.js");
const router = require("./routes/combineRouter.js");
const errorMidleware = require("./midleware/errorsMidleware/errorMidleware.js");

const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({ message: "it is root of news_api" });
});

//Midleware
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));
app.use(bodyParser.urlencoded({ extended: false }));

//Routes
app.use("/api", router);
app.use(errorMidleware);

//Start func
const start = async () => {
  try {
    await db.authenticate();
    await db.sync({ force: false });
    app.listen(port, () => console.log(`Server is running on port ${port}`));
  } catch (e) {
    console.log(e);
  }
};

start();
