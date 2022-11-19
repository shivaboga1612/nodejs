const User = require('../models/User')
const bcrypt = require('bcryptjs')
const genrateJWT = require('../middleware/generateJWT')



const userLogin = async (req,res)=>{

    try{

        let { email, password } = req.body

    if(!email || !password){
        return res.status(400).json({
            code:400,
            message: "Please enter all email and password",
            data:{}
        })
    }

    email = email.replace(/\s+/g, '');
    email = email.toLowerCase();

    const user = await User.findOne({email:email})

    if(!user){
        return res.status(400).json({
            code:400,
            message: 'user not found',
            data:{}
        })
    }
  
    const matchPassword = await bcrypt.compare(password, user.password)

    if(matchPassword && email == user.email){
        console.log("before")
        const { error, token } = await genrateJWT(email);
        console.log("after")

        if(!token){
            console.log(error)
        }

        const loggedUser = await User.findOneAndUpdate({email:email},
            {
                $set:{
                    accestoken:token
                }
            },{returnOriginal:false})

        console.log("Updated access token")

        res.status(200).json({
            code:200,
            message: 'User logged in successfully',
            data:{
                name: loggedUser.username,
                email: loggedUser.email,
                accestoken: loggedUser.accestoken
            }
        })
    }


    }
    catch(error){
        return res.status(400).json({
            code : 400,
            message: error.message
        })
    }

    
}

module.exports = {userLogin}