const User = require("../models/User");

exports.register = async (username, email, password, repeatPassword) => {
  //validate password

  if (password !== repeatPassword) {
    throw new Error("Password missmatch");
  }
  await User.create({username, email, password, repeatPassword});
};
