const jwt = require("jsonwebtoken");

const tokenGenerator = (id, res) => {
  const token = jwt.sign({ id }, process.env.SECRET_KEY, {
    expiresIn: "30days",
  });
  res.cookie("token", token, {
    httpOnly: true,
  });
};
module.exports = tokenGenerator;
