const Product = require('../models/product')
require("dotenv").config()




const createProduct = async (req,res)=>{

    try{

       if(role=='admin'){
            console.log("--------------------------------",role)

            const { name, price, description, inventoryCount } = req.body

            const productExisting = await Product.findOne({name:name})

            if(productExisting){
                return res.status(401).json({
                    code:402,
                    message: "Product with this name already exists"
                })
            }
            else{
                const newProduct = new Product({
                    name: name,
                    price: price,
                    desccription:description,
                    inventoryCount:inventoryCount
                })
        
                const pr = await newProduct.save()

                res.status(200).json({
                    code:200,
                    message: "Product added successfully",
                    dadta: pr
                })
            }
        }
        else{
            return res.status(401).json({
                code:401,
                message: "Only admion can add products"
            })
        }


       
    }
    catch(error){
        return res.status(400).json({
            code:400,
            message: error.message
        })
    }

}

module.exports = { createProduct }