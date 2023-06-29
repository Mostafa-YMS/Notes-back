const { Router } = require("express");
const { notesRouter } = require("../api/Note/router");
const { userRouter } = require("../api/User/router");

const router = Router();

router.use("/notes", notesRouter);
router.use("/user", userRouter);

module.exports = { router };
