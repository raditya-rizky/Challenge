const router = require("express").Router();
const user = require("../../controllers/adminController/userController");
const restrictAdmin = require("../../middleware/restrictAdmin");

// router.use(restrictAdmin);

router.get("/api/users", restrictAdmin, user.index);
router.get("/api/user/create", restrictAdmin, user.create);
router.post("/api/users", restrictAdmin, user.store);
router.get("/api/user/:id", restrictAdmin, user.show);
router.get("/api/user/:id/edit", restrictAdmin, user.edit);
router.put("/api/user/:id", restrictAdmin, user.update);
router.delete("/api/user/:id", restrictAdmin, user.destroy);

module.exports = router;
