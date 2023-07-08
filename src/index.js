const dotenv = require("dotenv");
const http = require("http");
const { Sequelize, sequelize } = require("../models");
const { app } = require("./app");

dotenv.config();

const server = http.createServer(app);

const PORT = process.env.PORT;

server.listen(PORT, async (err) => {
  if (err) console.log("server", err);
  else {
    console.log(`Server is running on http://localhost:${PORT}`);
    await sequelize.authenticate();
    console.log("Database Connected!");
  }
});
