const { Admin } = require("../models");

exports.page = (req, res) => {
  res.render("pages/login", {
    msg: req.flash("msg"),
    pageTitle: "Login Admin",
  });
};

exports.admin = async (req, res) => {
  const { username, password } = req.body;
  const admins = await Admin.findOne({
    where: {
      username: username,
      password: password,
    },
  });

  if (admins === null) {
    req.flash("msg", "Incorrect username or password!");
    res.redirect("/login");
  } else {
    req.flash("msg", `Login successful!`);
    res.redirect("/users");
  }
};
