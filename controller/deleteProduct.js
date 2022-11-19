
const Product = require('../models/product');

const deleteProduct = async(req,res)=>{


    try{

        const { id, name } = req.body

        if(role=='admin'){

            if(!id){
                return res.status(401).json({
                    code:401,
                    message:"Please provide product id"
                })
    
            }
    
            const product = Product.findById({_id:id});
    
            if(!product){
                return res.status(401).json({
                    code:401,
                    message:"Product does not exist"
                })
            }
            else{
                await Product.findByIdAndDelete({_id:id})
                res.status(200).json({
                    code:200,
                    message:"Product deleted successfully"
                })
    
            }
      
        }
        else{
            return res.status(401).json({
                code:401,
                message:"Only admin can delete a product"
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

module.exports= deleteProduct