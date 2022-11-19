require("dotenv").config()
const mongoose = require("mongoose");

exports.connectToDB = async () =>{
    mongoose.connect(process.env.MONGO_URI)
            .then(()=>{
                console.log('Connected to DB')
            })
            .catch((error)=>{
                console.log("Failed to connect to DB", error)
            })
}

