const prisma=require('../../config/db.config')

exports.getSubCategories=async (req,res)=>{
    const data=await prisma.subCategories.findMany();
    return res.json(data)

}

exports.createSubCategory=async (req,res)=>{
    const {title}=req.body
    const data=await prisma.subCategories.create({
        data:{
            title
        }
    })
    return res.json(data)
}