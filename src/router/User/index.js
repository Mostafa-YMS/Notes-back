const { Router } = require("express");
const { createUser, getUsers } = require("../../controller/User");

const userRouter = Router();

userRouter.post("/", createUser);
userRouter.get("/", getUsers);

module.exports = { userRouter };
