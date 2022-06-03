exports.home = (req, res) => {
  res.render("pages/home", {
    msg: req.flash("msg"),
    msgSignUp: req.flash("msgSignUp"),
    pageTitle: "Home",
  });
};

exports.game = (req, res) => {
  res.render("pages/game", { pageTitle: "The Game" });
};
