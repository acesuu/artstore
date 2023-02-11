const User = require("../user/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Token = require("../utils/Token");
const Cart = require("../cart/cartModel");

// Register Account
const Register = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const check = await User.findOne({ email: email }).exec();

    if (check) {
      return res.status(208).json({
        status: false,
        message: "This email already used.",
      });
    }

    // Password Hash
    let hashPassword = await bcrypt.hash(password, 10);

    // Create account object
    let newAccount = new User({
      email: email,
      password: hashPassword,
      verified: true,
    });

    // Save information
    const saveAccount = await newAccount.save();

    if (saveAccount) {
      let message = "Successfully created account";
      let newCart = new Cart({
        user: newAccount._id,
      });
      const saveCart = await newCart.save();
      if (saveCart) message += " and cart.";
      return res.status(201).json({
        status: true,
        message: message,
      });
    }
  } catch (error) {
    if (error) next(error);
  }
};

// Login Account
const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // User Check

    // Account find using email
    let account = await User.findOne({ email }).exec();

    // Compare with password
    if (account) {
      const result = await bcrypt.compare(password, account.password);
      if (result) {
        // Generate JWT token
        const token = await jwt.sign(
          { id: account._id, name: account.name },
          "SECRET",
          { expiresIn: "365d" }
        );

        // Update JWT token
        const updateToken = await User.findOneAndUpdate(
          { _id: account._id },
          { $set: { access_token: token, status: "online" } },
          { new: true }
        ).exec();

        if (updateToken) {
          return res.status(200).json({
            status: true,
            token,
          });
        }

        //const emailtoken = account.generateAuthToken();
        res
          .status(200)
          .send({ data: token, message: "logged in successfully" });
      }
      res.status(404).json({
        status: false,
        message: "Invalid e-mail or password",
      });
    }
  } catch (error) {
    if (error) next(error);
  }
};

// Reset Password
const Reset = async (req, res, next) => {
  try {
    const { email } = req.body;

    console.log({ email, password });
  } catch (error) {
    if (error) next(error);
  }
};

// Logout
const Logout = async (req, res, next) => {
  try {
    // Split token
    const token = req.headers.authorization.split(" ")[1];
    const decode = jwt.verify(token, "SECRET");

    // Find account using account id
    let account = await User.findOne({
      $and: [{ _id: decode.id }],
    });
    if (!account) {
      return res.status(404).json({
        status: false,
        message: "Invalid token",
      });
    }

    // Find account and null token field
    const updateToken = await User.findByIdAndUpdate(
      { _id: decode.id },
      { $set: { access_token: null, status: "offline" } }
    );
    if (!updateToken) {
      return res.status(404).json({
        status: false,
        message: "Invalid token",
      });
    }

    res.status(200).json({
      status: true,
      message: "Successfully logged out",
    });
  } catch (error) {
    if (error) {
      res.status(501).json({
        status: false,
        message: error.message,
      });
    }
  }
};

const verifyToken = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    if (!user) return res.status(400).send({ message: "Invalid link" });

    const token = await Token.findOne({
      userId: user._id,
      token: req.params.token,
    });
    if (!token) return res.status(400).send({ message: "Invalid link" });

    await User.updateOne({ _id: user._id, verified: true });
    await token.remove();

    res.status(200).send({ message: "Email verified successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = {
  Register,
  Login,
  Reset,
  Logout,
  verifyToken,
};
