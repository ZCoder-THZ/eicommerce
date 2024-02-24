const prisma=require('../../config/db.config')
const { retrivedSuccess, createSuccess } = require('../utils/jsonResponse');
const { getItem, deleteItem } = require('../utils/itemUtils');

exports.getCategories=async(req,res)=>{
    const data=await prisma.categories.findMany({})
    return retrivedSuccess(res,200,'Categories',data)
}

exports.createCategory=async(req,res)=>{
   try {

    const {title}=req.body
    const data=await prisma.categories.create({
        data:{
            title
        }
    })
    createSuccess(res,200,'Categories',data)

   } catch (error) {
    return res.json(error)
   }
}
