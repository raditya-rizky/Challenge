const router = require("express").Router();
const user = require("../controllers/userController");

router.get("/users", user.index);
router.get("/user/create", user.create);
router.post("/users", user.store);
router.get("/user/:id", user.show);
router.get("/user/:id/edit", user.edit);
router.put("/user/:id", user.update);
router.delete("/user/:id", user.destroy);

module.exports = router;
