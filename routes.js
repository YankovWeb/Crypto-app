const router = require("express").Router();
const homeController = require("./controllers/homeController");
const authController = require("./controllers/authController");
const cryptoControll = require("./controllers/cryptoController");
// add: routes
router.use(homeController);
router.use(authController);
router.use("/crypto", cryptoControll);
router.all("*", (req, res) => {
  res.redirect("home/404");
});

module.exports = router;
