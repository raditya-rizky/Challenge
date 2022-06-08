const router = require("express").Router();
const pagesRouter = require("./pagesRouter");
const loginRouter = require("./loginRouter");
const userRouter = require("./userRouter");

router.use(pagesRouter);
router.use(loginRouter);
router.use(userRouter);

module.exports = router;
