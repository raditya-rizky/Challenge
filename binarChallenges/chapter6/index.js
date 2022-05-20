const express = require("express");
const router = require("./router");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
const users = require("./data/users.js");

const app = express();
const PORT = 3000;

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

app.set("view engine", "ejs");

app.use((req, res, next) => {
  res.locals.url = req.originalUrl;
  next();
});

// Router
app.use(router);

app.listen(PORT, () => {
  console.log(`Server listening to http://localhost:${PORT}`);
});
