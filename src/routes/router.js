const router = require("express").Router();
const userRoute = require("./userRoute.js");
// const { getProducts, createProduct, deleteProduct } = require('../controllers/productController')
// const { productValidationRules } = require('../validation/products/productValidation')

// router.route('/products').get(getProducts).post(productValidationRules, createProduct)
// router.route('/products/:id').delete(deleteProduct)

router.use("/", userRoute);

module.exports = router;
