const router = require('express').Router()

const { getProducts, createProduct } = require('../controllers/productController')
const { productValidationRules } = require('../validation/products/productValidation')

router.route('/products').get(getProducts).post(productValidationRules, createProduct)

module.exports = router
