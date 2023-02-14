const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  {
    virtuals: {
      repeatPassword: {
        set(value) {
          if (this.password !== value) {
            throw new mongoose.Error("Password Missmatch");
          }
        },
      },
    },
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
