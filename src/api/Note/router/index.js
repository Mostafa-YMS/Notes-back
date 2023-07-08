const { Router } = require("express");
const { noteTypesRouter } = require("../../NoteTypes/router");
const { getNotes, createNote, getSingleNote } = require("../controller");
const pagination = require("../../../middleware/pagination");

const notesRouter = Router();

notesRouter.use("/type", noteTypesRouter);

notesRouter.get("/", pagination, getNotes);
notesRouter.get("/:id", getSingleNote);
notesRouter.post("/", createNote);

module.exports = { notesRouter };
