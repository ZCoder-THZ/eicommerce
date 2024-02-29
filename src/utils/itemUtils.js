
exports.getItem=async(req,res,item)=>{
    try {
        const data=await item.findUnique({
            where:{
                id:parseInt(req.params.id)
            },
        
                include: undefined
        })
        if(data)return res.json(data)

        return res.status(404).json({message:'Item not found'});

    } catch (error) {
        return res.json(error)
    }   
}

exports.deleteItem=async(req,res,item)=>{
    // Delete the product from the database category /products
    try {
        const data = await item.delete({
            where: {
                id:parseInt(req.params.id)
            },
        });
        if(data)return res.json({message:'data deleted successfully'})


    } catch (error) {
        return res.json({message:error.meta.cause})
    }   
}