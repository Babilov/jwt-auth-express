require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db.js");
const router = require("./routes/combineRouter.js");

const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({ message: "it is root of news_api" });
});

//Midleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Routes
app.use("/api", router);

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
