const router = require("express").Router();
const login = require("../controllers/loginController");

router.get("/api/login", login.page);
router.post("/api/login", login.admin);

module.exports = router;
