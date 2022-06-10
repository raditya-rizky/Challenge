const router = require("express").Router();
const user = require("../../controllers/userGameController/registerController");

router.post("/api/v1/auth/register", user.register);

module.exports = router;
