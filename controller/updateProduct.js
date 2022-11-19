
const Product = require('../models/product');


const updateProduct = async (req,res)=>{

    try{

        if(role=='admin' || role=='manager'){

            const { name, price, description, inventoryCount, id } = req.body

            if(!id){
                return res.status(401).json({
                    code:401,
                    message:"Please provide product id"
                })
    
            }

            //We can get product using Id which is best practice but also can get using name
            const product = await Product.findOne({_id:id})

            if(!product){
                return res.status(401).json({
                    code:401,
                    message:"Product does not exist"
                })
            }

            const updated = await Product.findByIdAndUpdate({_id:id},
                {
                    $set:{
                        price: price,
                        desccription:description,
                        inventoryCount:inventoryCount
                    }
                },
                {returnOriginal:false}
            )

            res.status(200).json({
                code:200,
                message: "Product details updated successfully",
                data: updated
            })

        }
        else{
            return res.status(401).json({
                code:401,
                message:"Only admins and managers can update product details"
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

module.exports = updateProduct