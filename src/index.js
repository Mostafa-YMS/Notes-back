const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Sequelize, sequelize } = require("../models");
const { router } = require("./router");
const path = require("path");

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const MAX_SIZE = 1.7 * 1024 * 1024;

global.__basedir = path.join(__dirname, "../");
app.use(express.static(path.join(__dirname, "../public")));

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use("/", router);

app.listen(PORT, async (err) => {
  if (err) console.log("server", err);
  else {
    console.log(`Server is running on http://localhost:${PORT}`);
    await sequelize.authenticate();
    console.log("Database Connected!");
  }
});
