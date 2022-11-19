const User = require('../models/User')
const { hashPassword } = require('../middleware/authentication')


const userRegister = async (req,res)=>{

    try{
        console.log("inside")
        console.log("------------------------",req.body.password)
        const { username, email, password, phone, role } = req.body

        const isUserPresent = await User.findOne({email: email})

        if(isUserPresent){
            res.status(401).json({
                code: 401,
                message: 'Email id already exists',
                data: {}
            })
        }
        else{
            
            const roles = ['admin','manager','staff'];

            if(!roles.includes(role)){
                res.status(401).json({
                    code: 401,
                    message: 'Role of user should be one of admin, manager and staff',
                    data: {}
                })
                
            }
            const hash = await hashPassword(password)

            const userEmail = email.toLowerCase()
            
            const newUser = new User({
                username: username,
                email: userEmail,
                password: hash,
                phone: phone,
                role:role

            })

            await newUser.save()

            if(newUser){
                res.status(200).json({
                    code: 200,
                    message:'User registered successfully',
                    data: newUser
                })
            }
        }

    

    }
    catch(error){
        console.log(error)
    }

    

}


module.exports = { userRegister }
