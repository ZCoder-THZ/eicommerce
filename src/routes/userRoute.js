const router = require("express").Router();
const {
	getUsers,
	createUser,
	updateUser,
	deleteUser,
} = require("../controllers/userController");
router.route("/users").get(getUsers).post(createUser);
router.route("/login").post((req,res)=>{
	return res.status(200).send("Login Successful")
})
router.route("/users/:id").put(updateUser).delete(deleteUser);
module.exports = router;
