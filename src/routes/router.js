const router = require("express").Router();
const userRoute = require("./userRoute.js");
const productRoute=require('./productRoute.js')
const categoryRoute=require('./categoryRoute.js')
const subCategoryRoute=require('./subCategoryRoute.js')
router.use("/", userRoute);
router.use('/products',productRoute);
router.use('/categories',categoryRoute);
router.use('/subCategories',subCategoryRoute);



module.exports = router;
