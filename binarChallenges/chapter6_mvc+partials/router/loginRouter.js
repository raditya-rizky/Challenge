const router = require("express").Router();
const login = require("../controllers/loginController");

router.get("/login", login.page);
router.post("/login", login.admin);

module.exports = router;
