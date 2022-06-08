const { UserGame, UserProfile, UserHistory } = require("../models");

exports.index = async (req, res) => {
  const allUsers = await UserGame.findAll({
    order: [["updatedAt", "DESC"]],
  });
  res.render("pages/users/index", {
    msg: req.flash("msg"),
    add: req.flash("add"),
    dlt: req.flash("dlt"),
    pageTitle: "Users List",
    allUsers,
  });
};

exports.create = (req, res) => {
  res.render("pages/users/create", {
    pageTitle: "Create User",
  });
};

exports.store = async (req, res) => {
  const createUser = await UserGame.create({
    username: req.body.username,
    password: req.body.password,
  });

  const createProfile = await UserProfile.create({
    name: req.body.name,
    address: req.body.address,
    dateOfBirth: req.body.dateOfBirth,
    userGameId: createUser.id,
  });

  const createHistory = await UserHistory.create({
    userId: createUser.id,
  });

  req.flash("add", `User "${createUser.username}" added`);
  res.redirect("/api/users");
};

exports.show = async (req, res) => {
  const findUser = await UserGame.findOne({
    where: { id: req.params.id },
    include: ["profile", "history"],
  });
  res.render("pages/users/show", {
    upd: req.flash("upd"),
    pageTitle: `User: "${findUser.username}"`,
    findUser,
  });
};

exports.edit = async (req, res) => {
  const editUser = await UserGame.findOne({
    where: { id: req.params.id },
    include: ["profile", "history"],
  });
  res.render("pages/users/edit", {
    pageTitle: `Edit User "${editUser.username}"`,
    editUser,
  });
};

exports.update = async (req, res) => {
  const { username, password, name, address, dateOfBirth } = req.body;

  const updateUser = await UserGame.update(
    {
      username: username,
      password: password,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  const updateProfile = await UserProfile.update(
    {
      name: name,
      address: address,
      dateOfBirth: dateOfBirth,
      userGameId: req.params.id,
    },
    {
      where: {
        userGameId: req.params.id,
      },
    }
  );
  const createHistory = await UserHistory.create({
    userId: req.params.id,
  });
  req.flash("upd", `User updated`);
  res.redirect(`/api/user/${req.params.id}`);
};

exports.destroy = async (req, res) => {
  const deleteProfile = await UserProfile.destroy({
    where: {
      userGameId: req.params.id,
    },
  });
  const deleteHistory = await UserHistory.destroy({
    where: {
      userId: req.params.id,
    },
  });
  const findUser = await UserGame.findOne({
    where: {
      id: req.params.id,
    },
  });
  const deleteUser = await UserGame.destroy({
    where: {
      id: req.params.id,
    },
  });
  req.flash("dlt", `User "${findUser.username}" has been deleted`);
  res.redirect("/api/users");
};
