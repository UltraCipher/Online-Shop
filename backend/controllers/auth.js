const authValidator = require("./../validators/authValidator");
const userModel = require("./../models/user");
const bcrypt = require("bcrypt");
const tokenGenerator = require("./../middlewares/tokenGenerator");

exports.register = async (req, res) => {
  const validatorResult = authValidator(req.body);
  if (validatorResult !== true) {
    return res.status(402).json({
      message: validatorResult,
    });
  }
  const { firstName, lastName, email, password } = req.body;
  const isUserExit = await userModel.findOne({ email });
  if (isUserExit) {
    return res.status(409).json({
      message: "the user is already exit",
    });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userModel.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    const newUser = user.toObject();
    Reflect.deleteProperty(newUser, "password");
    tokenGenerator(user._id, res);
    return res.json(newUser);
  } catch (error) {
    console.log("Error creating user:", error.message);
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (!user) {
    return res.status(400).json({
      message: "you dont have an account",
    });
  }
  const checkPassword = await bcrypt.compare(password, user.password);
  if (!checkPassword) {
    return res.status(401).json({
      message: "the password is not correct",
    });
  }
  const newUser = user.toObject();
  Reflect.deleteProperty(newUser, "password");
  tokenGenerator(user._id, res);
  return res.json(newUser);
};

exports.getMe = async (req, res) => {
  res.send("getMe");
};
