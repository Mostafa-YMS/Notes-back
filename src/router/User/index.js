const { Router } = require("express");
const { createUser, getUsers } = require("../../controller/User");
const userSchema = require("../../Schema/User");
const uploadFile = require("../../shared/upload");

const userRouter = Router();

userRouter.post("/", uploadFile.single("pic"), userSchema, createUser);
userRouter.get("/", getUsers);

module.exports = { userRouter };
