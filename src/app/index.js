const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const { router } = require("./router");

const app = express();

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

module.exports = { app };
