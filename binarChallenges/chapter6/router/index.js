const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("pages/home", {
    msg: req.flash("msg"),
    msgSignUp: req.flash("msgSignUp"),
  });
});

router.get("/game", (req, res) => {
  res.render("pages/game");
});

router.get("/login", (req, res) => {
  res.render("pages/login", {
    msg: req.flash("msg"),
  });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const username = users.find(
    (e) => e.email === email && e.password === password
  );

  if (username) {
    // flash message
    req.flash("msg", `${email}, Login successful!`);
    res.redirect("/");
  } else {
    // flash message nya
    req.flash("msg", "Incorrect email or password!");
    res.redirect("/login");
  }
});

//Serving data user
router.get("/user-data", (req, res) => {
  res.status(200).json(users);
});

router.get("/user-data/:id", (req, res) => {
  const user = users.find((e) => e.id === Number(req.params.id));
  res.status(200).json(user);
});

module.exports = router;
