const { Router } = require("express");
const { noteTypesRouter } = require("../../NoteTypes/router");

const notesRouter = Router();

notesRouter.use("/type", noteTypesRouter);

module.exports = { notesRouter };
