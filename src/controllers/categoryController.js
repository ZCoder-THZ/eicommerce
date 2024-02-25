const prisma=require('../../config/db.config')
const { retrivedSuccess, createSuccess } = require('../utils/jsonResponse');
const {getItem, deleteItem}=require('../utils/itemUtils')

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

exports.getCategory=(req,res)=>{
    getItem(req,res,prisma.categories);
}
exports.deleteCategory=(req,res)=>{
    deleteItem(req,res,prisma.categories);
}
exports.updateCategory=async (req,res)=>{
    try {
		const id = req.params.id * 1;
		// Create the product in the database
		const update = await prisma.categories.update({
			where: {
				id,
			},
			data: req.body,
		});
		return res.json(update);
	} catch (error) {
		return res.send(error);
	}
}