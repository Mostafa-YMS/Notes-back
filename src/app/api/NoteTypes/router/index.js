const { Router } = require("express");
const { getNoteTypes } = require("../controller");

const noteTypesRouter = Router();

noteTypesRouter.get("/", getNoteTypes);

module.exports = { noteTypesRouter };
