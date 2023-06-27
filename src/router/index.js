const { Router } = require("express");
const { notesRouter } = require("./Note");
const { userRouter } = require("./User");

const router = Router();

router.use("/notes", notesRouter);
router.use("/user", userRouter);

module.exports = { router };
