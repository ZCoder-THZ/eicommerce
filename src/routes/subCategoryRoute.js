const router=require('express').Router()
const { getSubCategories, createSubCategory } = require('../controllers/subCategoryController')
router.route('/').get(getSubCategories).post(createSubCategory)
module.exports=router