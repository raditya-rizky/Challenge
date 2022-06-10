const router = require("express").Router();
const user = require("../../controllers/userGameController/loginController");

router.post("/api/v1/auth/login", user.login);

module.exports = router;
