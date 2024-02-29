const router=require('express').Router()
const { getProducts, createProduct, deleteProduct, getProduct,uploadImage ,getProductImage} = require('../controllers/productController')
const { productValidationRules } = require('../validation/products/productValidation')

router.route('/').get(getProducts).post( createProduct)
// router.route('/middleware').get(middlwareTest)

router.route('/images').post(uploadImage)
// router.route('/images').post(uploadImage).get(getProductImage)
router.route('/images/:filename').get(getProductImage)

router.route('/:id').delete(deleteProduct).get(getProduct)



module.exports=router