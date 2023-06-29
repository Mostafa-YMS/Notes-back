const { validationResult } = require("express-validator");
const { User } = require("../../../../models");

const createUser = async (req, res) => {
  const result = validationResult(req).array();
  if (result?.length) return res.send("Proper name is required");

  const pic = req.file;
  if (!pic?.mimetype?.includes("image"))
    return res.send("pic must be an image");

  const { name } = req.body;
  const user = await User.create({
    name,
    pic: pic?.filename,
  });
  return res.send(user);
};

const getUsers = async (req, res) => {
  const users = await User.findAll();
  res.send(users);
};

module.exports = { createUser, getUsers };
