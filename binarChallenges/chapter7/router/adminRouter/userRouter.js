const router = require("express").Router();
const user = require("../../controllers/adminController/userController");
const restrictAdmin = require("../../middleware/restrictAdmin");

router.use(restrictAdmin);

router.get("/api/users", user.index);
router.get("/api/user/create", user.create);
router.post("/api/users", user.store);
router.get("/api/user/:id", user.show);
router.get("/api/user/:id/edit", user.edit);
router.put("/api/user/:id", user.update);
router.delete("/api/user/:id", user.destroy);

module.exports = router;
