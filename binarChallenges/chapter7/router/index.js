const router = require("express").Router();
const pagesRouter = require("./adminRouter/pagesRouter");
const loginRouter = require("./adminRouter/loginRouter");
const userRouter = require("./adminRouter/userRouter");
const userRegister = require("./userGameRouter/registerRouter");
const userLogin = require("./userGameRouter/loginRouter");

router.use(userLogin);
router.use(userRegister);
router.use(pagesRouter);
router.use(loginRouter);
router.use(userRouter);

module.exports = router;
