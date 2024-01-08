const Hashing = require('bcrypt')

async function Hash(req , res , next) {

    try{
        let password = req.headers.password;

        let salt = await Hashing.genSalt(10);
    
        let hashedPassword = await Hashing.hash(password , salt)

        req.hashedPassword = hashedPassword

       req.salt = salt

        next();
        
    }

    catch(err) {

        console.log(err)
        res.json({
            message : "Something Went Wrong"
        })
    }
  


}

module.exports = Hash;
