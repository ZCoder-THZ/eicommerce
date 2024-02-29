const router = require("express").Router();

const {
	getAdmin,
	createAdmin,
	updateAdmin,
} = require("../controllers/adminController");

router.route("/").get(getAdmin).post(createAdmin);
router.route("/:id").put(updateAdmin);

module.exports = router;
