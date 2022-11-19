const jwt = require('jsonwebtoken');
const User = require('../models/User');
require("dotenv").config()

const validateRole = async (req,res,next)=>{

    try{
        const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({
            code: 401,
            status: false,
            message: "Access token is missing"
        })
    }

    const token = authHeader.split(" ")[1];

    let result = jwt.verify(token, process.env.JWT_SECRET);

    const user = await  User.findOne({email:result.email})

    role = user.role
    next()
    }
    catch(error){
        console.log(error)
    }
}

module.exports = { validateRole }