const { Schema, model } = require("mongoose");

const validateEmail = function (email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      maxlength: 50,
      default: null,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate: [validateEmail, "Please provide a valid email address"],
    },
    // role: {
    //   type: String,
    //   dafault: "patient",
    //   enum: ["patient"],
    // },
    status: {
      type: String,
      default: "offline",
      enum: ["online", "offline"],
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
    image: {
      type: String,
      trim: true,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);
module.exports = User;
