const multer = require("multer");

const maxSize = 1.7 * 1024 * 1024;

const imageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb("file must be an image.", false);
  }

  //   onFileUploadStart: function (file, req, res) {
  //     if (req.files.file.length > maxSize) {
  //       return false;
  //     }
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "public/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${file.originalname}`);
  },
});

const uploadFile = multer({
  storage: storage,
  // fileFilter: imageFilter,
  limits: { fieldSize: maxSize },
});
module.exports = uploadFile;
