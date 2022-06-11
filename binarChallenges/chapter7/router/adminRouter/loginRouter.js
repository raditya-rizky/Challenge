const router = require("express").Router();
const login = require("../../controllers/adminController/loginController");

router.get("/api/login-admin", login.page);
router.post("/api/login-admin", login.admin);

module.exports = router;
