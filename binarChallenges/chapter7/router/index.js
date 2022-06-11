const router = require("express").Router();

const adminRouter = require("./adminRouter/index");
const userRouter = require("./userGameRouter/index");

router.use(adminRouter);
router.use(userRouter);

module.exports = router;
