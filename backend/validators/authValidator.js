const fastestValidator = require("fastest-validator");

const v = new fastestValidator();

const schema = {
  firstName: { type: "string", min: 2, max: 20 },
  lastName: { type: "string", min: 2, max: 20 },
  email: { type: "email", min: 2, max: 20 },
  password: { type: "string", min: 2, max: 20 },
  $$strict: true,
};

const check = v.compile(schema);

module.exports = check;
