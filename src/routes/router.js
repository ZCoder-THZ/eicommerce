const router = require('express').Router()

const { getProducts, createProduct, deleteProduct } = require('../controllers/productController')
const { productValidationRules } = require('../validation/products/productValidation')

router.route('/products').get(getProducts).post(productValidationRules, createProduct)
router.route('/products/:id').delete(deleteProduct)

module.exports = router
