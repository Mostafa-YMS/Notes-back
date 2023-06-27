const { Router } = require("express");
const { notesRouter } = require("./Note");

const router = Router();

router.use("/notes", notesRouter);

module.exports = { router };
