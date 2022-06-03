const router = require("express").Router();
const pagesRouter = require("./pagesRouter");
const loginRouter = require("./loginRouter");
const userRouter = require("./userRouter");

router.use(pagesRouter);
router.use(loginRouter);
router.use(userRouter);

// router.get("/", (req, res) => {
//   res.render("pages/home", {
//     msg: req.flash("msg"),
//     msgSignUp: req.flash("msgSignUp"),
//   });
// });

// router.get("/game", (req, res) => {
//   res.render("pages/game");
// });

// router.get("/login", (req, res) => {
//   res.render("pages/login", {
//     msg: req.flash("msg"),
//     pageTitle: "Login Admin",
//   });
// });

// router.get("/user/create", (req, res) => {
//   res.render("pages/users/create", {
//     pageTitle: "Create User",
//   });
// });

// router.post("/login", async (req, res) => {
//   const { username, password } = req.body;
//   const admins = await Admin.findOne({
//     where: {
//       username: username,
//       password: password,
//     },
//   });

//   if (admins === null) {
//     req.flash("msg", "Incorrect email or password!");
//     res.redirect("/login");
//   } else {
//     req.flash("msg", `Login successful!`);
//     res.redirect("/users");
//   }
// });

// router.get("/users", async (req, res) => {
//   const allUsers = await UserGame.findAll({
//     order: [["updatedAt", "DESC"]],
//   });
//   res.render("pages/users/index", {
//     msg: req.flash("msg"),
//     add: req.flash("add"),
//     dlt: req.flash("dlt"),
//     pageTitle: "Users List",
//     allUsers,
//   });
// });

// router.post("/users", async (req, res) => {
//   const createUser = await UserGame.create({
//     username: req.body.username,
//     password: req.body.password,
//   });

//   const createProfile = await UserProfile.create({
//     name: req.body.name,
//     address: req.body.address,
//     dateOfBirth: req.body.dateOfBirth,
//     userGameId: createUser.id,
//   });

//   const createHistory = await UserHistory.create({
//     userId: createUser.id,
//   });

//   req.flash("add", `User "${createUser.username}" added`);
//   res.redirect("/users");
// });

// router.get("/user/:id", (req, res) => {
//   UserGame.findOne({
//     where: { id: req.params.id },
//     include: ["profile", "history"],
//   }).then((userOne) => {
//     res.render("pages/users/show", {
//       upd: req.flash("upd"),
//       pageTitle: `User: "${userOne.username}"`,
//       userOne,
//     });
//   });
// });

// router.get("/user/:id/edit", (req, res) => {
//   UserGame.findOne({
//     where: { id: req.params.id },
//     include: ["profile", "history"],
//   }).then((userOne) => {
//     res.render("pages/users/edit", {
//       pageTitle: `Edit User "${userOne.username}"`,
//       userOne,
//     });
//   });
// });

// router.put("/users/:id", async (req, res) => {
//   const { username, password, name, address, dateOfBirth } = req.body;

//   const updateUser = await UserGame.update(
//     {
//       username: username,
//       password: password,
//     },
//     {
//       where: {
//         id: req.params.id,
//       },
//     }
//   );
//   const updateProfile = await UserProfile.update(
//     {
//       name: name,
//       address: address,
//       dateOfBirth: dateOfBirth,
//       userGameId: req.params.id,
//     },
//     {
//       where: {
//         userGameId: req.params.id,
//       },
//     }
//   );
//   const createHistory = await UserHistory.create({
//     userId: req.params.id,
//   });
//   req.flash("upd", `User updated`);
//   res.redirect(`/user/${req.params.id}`);
// });

// router.delete("/user/:id", async (req, res) => {
//   const deleteProfile = await UserProfile.destroy({
//     where: {
//       userGameId: req.params.id,
//     },
//   });
//   const deleteHistory = await UserHistory.destroy({
//     where: {
//       userId: req.params.id,
//     },
//   });
//   const findUser = await UserGame.findOne({
//     where: {
//       id: req.params.id,
//     },
//   });
//   const deleteUser = await UserGame.destroy({
//     where: {
//       id: req.params.id,
//     },
//   });
//   req.flash("dlt", `User "${findUser.username}" has been deleted`);
//   res.redirect("/users");
// });

module.exports = router;
