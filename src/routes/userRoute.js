const router = require("express").Router();

const {
	getUsers,
	createUser,
	updateUser,
	deleteUser,
} = require("../controllers/userController");
router.route("/users").get(getUsers).post(createUser);

const middleware=(req,res,next)=>{
	if(req.body.email && req.body.password){
		if(req.body.password.length < 8){
			return res.status(400).send("Password must be at least 8 characters")

		}else{

		next()
			
		}
	}else{
		return res.status(400).send("All fields are required")
	}
}
router.route("/login").post(middleware,(req,res)=>{
	


	return res.status(200).send("Login Successful")

})

router.route("/users/:id").put(middleware,updateUser).delete(deleteUser);

module.exports = router;
