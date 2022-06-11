const router = require("express").Router();
const user = require("../../controllers/userGameController/createRoomController");
const restrict = require("../../middleware/restrictUser");

router.get("/api/v1/create-room", restrict, user.get);
router.post("/api/v1/create-room", restrict, user.create);

module.exports = router;
