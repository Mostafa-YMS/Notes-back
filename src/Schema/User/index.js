const { checkSchema } = require("express-validator");

const userSchema = checkSchema({
  name: { notEmpty: true, trim: true, isLength: { options: { min: 3 } } },
  pic: {},
});

module.exports = userSchema;
