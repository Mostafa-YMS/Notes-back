const { Router } = require("express");
const { getNoteTypes } = require("../../../controller/NoteTypes");

const noteTypesRouter = Router();

noteTypesRouter.get("/", getNoteTypes);

module.exports = { noteTypesRouter };
