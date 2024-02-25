const router=require('express').Router()

const {getCategories,createCategory,getCategory,deleteCategory,updateCategory}=require('../controllers/categoryController')

router.route('/').get(getCategories).post(createCategory)
router.route('/:id').get(getCategory).delete(deleteCategory)
.put(updateCategory).delete(deleteCategory)
module.exports=router