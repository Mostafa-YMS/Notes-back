const moment = require("moment");
const {
  Note,
  NoteReceivers,
  NoteMedia,
  NoteType,
  User,
} = require("../../../../models");
const { Op } = require("sequelize");

const getNotes = async (req, res) => {
  let notes = [];
  if (req?.query?.type === "created") {
    notes = await Note.findAll({
      where: { userId: req?.query?.userId },
      include: [
        { model: NoteMedia, as: "media", required: false, separate: true },
        {
          model: NoteReceivers,
          as: "receivers",
          required: false,
          separate: true,
          include: [{ model: User, as: "user", required: false }],
        },
      ],
    });
  } else {
    notes = await NoteReceivers.findAll({
      where: {
        userId: req?.query?.userId,
        createdAt: {
          [Op.gte]: moment().subtract(30, "days").toDate(),
        },
      },
      include: [
        {
          model: Note,
          as: "note",
          required: false,
          include: [{ model: User, as: "sender", required: false }],
        },
      ],
    });
  }
  res.send(notes);
};

const getSingleNote = async (req, res) => {
  const note = await Note.findByPk(req?.params?.id, {
    include: [
      { model: NoteMedia, as: "media", required: false, separate: true },
      { model: NoteType, as: "type", required: false },
      { model: User, as: "sender", required: false },
    ],
  });
  res.send(note);
};

createNote = async (req, res) => {
  const { userId, title, body, typeId, toUsers } = req.body;
  const note = await Note.create({ userId, title, body, typeId });

  await NoteReceivers.bulkCreate(
    toUsers?.map((userId) => ({ noteId: note?.dataValues?.id, userId }))
  );

  res.send(note);
};

module.exports = { getNotes, createNote, getSingleNote };
