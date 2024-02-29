const router = require("express").Router();

const {
	getUsers,
	createUser,
	updateUser,
	deleteUser,
} = require("../controllers/userController");

const middleware = (req, res, next) => {
	if (req.body.name) {
		next();
	} else {
		return res.json("name is not defined");
	}
};

router.route("/users").get(getUsers).post(createUser);
router.route("/users/:id").put(updateUser).delete(deleteUser);

module.exports = router;
