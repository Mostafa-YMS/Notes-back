const { Router } = require("express");
const { noteTypesRouter } = require("./Type");

const notesRouter = Router();

notesRouter.use("/type", noteTypesRouter);

module.exports = { notesRouter };
