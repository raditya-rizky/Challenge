const router = require("express").Router();
const page = require("../controllers/pagesController");

router.get("/", page.home);
router.get("/game", page.game);

module.exports = router;
