const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
const users = require("./data/users.js");

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Flash message
app.use(cookieParser("secret"));
app.use(
  session({
    cookie: { maxAge: 6000 },
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());

// Routing

app.get("/", (req, res) => {
  res.render("index", {
    msg: req.flash("msg"),
    msgSignUp: req.flash("msgSignUp"),
  });
});

app.get("/game", (req, res) => {
  res.render("index2");
});

app.get("/login", (req, res) => {
  res.render("login", {
    msg: req.flash("msg"),
  });
});

app.get("/sign-up", (req, res) => {
  res.render("signUp", {
    msgSignUpFailed: req.flash("msgSignUpFailed"),
  });
});

app.post("/sign-up", (req, res) => {
  const { email, password } = req.body;

  const lastId = users[users.length - 1].id;
  const newId = lastId + 1;
  const username = users.find((e) => e.email === email);

  const user = {
    id: newId,
    email,
    password,
  };

  if (username) {
    req.flash("msgSignUpFailed", `${email}, Already existed!`);
    res.redirect("/sign-up");
  } else {
    users.push(user);
    req.flash("msgSignUp", `${email}, Signed Up!`);
    res.redirect("/");
  }
});

app.post("/login", (req, res) => {
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
app.get("/user-data", (req, res) => {
  res.status(200).json(users);
});

app.get("/user-data/:id", (req, res) => {
  const user = users.find((e) => e.id === Number(req.params.id));
  res.status(200).json(user);
});

// unknown page
app.use((req, res) => {
  res.status(404);
  res.send(`<h1>404</h1>`);
});

app.listen(port, () => {
  console.log(`Server listening to http://localhost:${port}`);
});
