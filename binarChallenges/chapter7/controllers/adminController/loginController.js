const { Admin } = require("../../models");
const passport = require("../../lib/passport");

exports.page = (req, res) => {
  res.render("pages/login", {
    msg: req.flash("msg"),
    pageTitle: "Login Admin",
  });
};

exports.admin = passport.authenticate("local", {
  successRedirect: "/api/users",
  failureRedirect: "/api/login",
  failureFlash: true,
});
