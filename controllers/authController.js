const router = require("express").Router();
router.get("/login", (req, res) => {
  res.render("auth/login");
});
router.post("/login", (req, res) => {
  const {email, password} = req.body;
});
router.get("/register", (req, res) => {
  res.render("auth/register");
});

module.exports = router;
