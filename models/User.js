const mongoose = require('mongoose');
const Schema = mongoose.Schema


const userSchema = new Schema({
    username : {
        type: String,
        require: true
    },
    email:{
        type:String,
        requrie:true
    },
    password: {
        type:String,
        require:true
    },
    phone:{
        type: String,
    },
    role: {
        type: String,
        require: true
    },
    accestoken: {
        type: String,
        default: null
    }

})

module.exports = mongoose.model("User", userSchema)

