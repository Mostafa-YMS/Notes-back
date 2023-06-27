const { User } = require("../../../models");

const createUser = async (req, res) => {
  const { name } = req.body;
  if (name && req.files[0]) {
    const user = await User.create({ name, pic: req.files[0] });
    return res.send(user);
  }
  res.send("name & pic are required");
};

const getUsers = async (req, res) => {
  const users = await User.findAll();
  res.send(users);
};

module.exports = { createUser, getUsers };
