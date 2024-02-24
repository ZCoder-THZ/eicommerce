const router=require('express').Router()
const { getProducts, createProduct, deleteProduct, getProduct,uploadImage } = require('../controllers/productController')
const { productValidationRules } = require('../validation/products/productValidation')

router.route('/').get(getProducts).post( createProduct)
router.route('/imageUpload').post(uploadImage)
router.route('/:id').delete(deleteProduct).get(getProduct)



module.exports=router