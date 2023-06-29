const { validationResult } = require("express-validator");
const { User } = require("../../../models");

const createUser = async (req, res) => {
  const result = validationResult(req).array();
  if (result?.length) return res.send("Proper name is required");

  const { name } = req.body;
  const user = await User.create({
    name,
    pic: req.files?.length ? req.files[0] : null,
  });
  return res.send(user);
};

const getUsers = async (req, res) => {
  const users = await User.findAll();
  res.send(users);
};

module.exports = { createUser, getUsers };
