const router = require("express").Router();
const userRegister = require("./registerRouter");
const userLogin = require("./loginRouter");
const createRoom = require("./createRoomRouter");
const fight = require("./fightRouter");

router.use(userRegister);
router.use(userLogin);
router.use(createRoom);
router.use(fight);

module.exports = router;
