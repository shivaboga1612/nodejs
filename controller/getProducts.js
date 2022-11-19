const Product = require("../models/product");


const getAllProducts = async (req,res)=>{

    try{
        if(role == 'admin' || role=='manager'){

            const products = await Product.find({})
            console.log(products)

            res.status(200).json({
                code:200,
                message: "Products fetched successfully",
                data: products
            })
       }
       else{
        return res.status(401).json({
            code:401,
            message:"Only admins and managers can fetch products"
        })

       }

    }
    catch(error){
        return res.status(400).json({
            code:400,
            message:error.message
        })
    }


}

module.exports = { getAllProducts }