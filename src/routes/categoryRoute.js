const router=require('express').Router()

const {getCategories,createCategory}=require('../controllers/categoryController')

router.route('/').get(getCategories).post(createCategory)
// router.route('/categories/:id').put(updateCategory).delete(deleteCategory)
module.exports=router