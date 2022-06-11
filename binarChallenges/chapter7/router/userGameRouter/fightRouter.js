const router = require("express").Router();
const fight = require("../../controllers/userGameController/fightController");

const restrict = require("../../middleware/restrictUser");

router.get("/api/v1/fight/:id", restrict, fight.get);
router.post("/api/v1/fight/:id", restrict, fight.fight);

module.exports = router;
