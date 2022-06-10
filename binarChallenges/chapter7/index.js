const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
const methodOverride = require("method-override");
const passport = require("./lib/passport");
const router = require("./router");

const app = express();
const PORT = 3000;

app.use(methodOverride("_method"));

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser("secret"));
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: false,
  })
);

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.set("view engine", "ejs");

app.use((req, res, next) => {
  res.locals.url = req.originalUrl;
  next();
});

// Router
app.use(router);

// unknown page
app.use((req, res) => {
  res.status(404);
  res.send(`<h1>404</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server listening to http://localhost:${PORT}`);
});
