const { Router } = require("express");
const { createUser, getUsers } = require("../../controller/User");
const userSchema = require("../../Schema/User");

const userRouter = Router();

userRouter.post("/", userSchema, createUser);
userRouter.get("/", getUsers);

module.exports = { userRouter };
