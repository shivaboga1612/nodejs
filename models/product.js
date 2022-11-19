const mongoose = require('mongoose');
const Schema = mongoose.Schema


const productSchema = new Schema({
    name: {
        type: String,
        requrie:true
    },
    price:{
        type: String,
        require:true
    },
    desccription:{
        type: String
    },
    inventoryCount:{
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model("Product", productSchema)