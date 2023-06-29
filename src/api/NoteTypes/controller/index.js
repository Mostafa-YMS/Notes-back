const { NoteType } = require("../../../../models");

const getNoteTypes = async (req, res) => {
  const notes = await NoteType.findAll();
  res.send(notes);
};

module.exports = { getNoteTypes };
