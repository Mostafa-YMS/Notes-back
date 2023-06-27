const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Sequelize, sequelize } = require("../models");

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send(`I am alive`);
});

app.listen(PORT, async (err) => {
  if (err) console.log("server", err);
  else {
    console.log(`Server is running on http://localhost:${PORT}`);
    await sequelize.authenticate();
    console.log("Database Connected!");
  }
});
