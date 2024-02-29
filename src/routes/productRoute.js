const router = require("express").Router();
const {
	getProducts,
	createProduct,
	deleteProduct,
	getProduct,
	uploadImage,
	updateProduct,
} = require("../controllers/productController");
const {
	productValidationRules,
} = require("../validation/products/productValidation");
const middleware = (req, res, next) => {
	if (req.body.name) {
		next();
	} else {
		return res.json("name is not defined");
	}
};

router.route("/").get(getProducts).post(middleware, createProduct);
router.route("/imageUpload").post(uploadImage);
router.route("/:id").delete(deleteProduct).get(getProduct).put(updateProduct);

module.exports = router;
