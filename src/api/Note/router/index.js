const { Router } = require("express");
const { noteTypesRouter } = require("../../NoteTypes/router");
const { getNotes, createNote, getSingleNote } = require("../controller");

const notesRouter = Router();

notesRouter.use("/type", noteTypesRouter);

notesRouter.get("/", getNotes);
notesRouter.get("/:id", getSingleNote);
notesRouter.post("/", createNote);

module.exports = { notesRouter };
