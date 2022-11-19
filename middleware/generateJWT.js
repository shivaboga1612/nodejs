const jwt = require('jsonwebtoken')


const genrateJWT = async (email) =>{

    try{
        const payload = { email : email}

    const token = jwt.sign(payload, process.env.JWT_SECRET)
    return { error: false, token:token}
    }
    catch(error){
        console.log(error);
        return {error:error}
    }
}

module.exports = genrateJWT