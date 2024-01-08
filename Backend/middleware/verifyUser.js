const hashing = require('bcrypt');
const { userdata } = require('./database');

async function verifyUser(req , res , next) {

    try{
        let username = req.headers.username;
    let password = req.headers.password;

    let data = await userdata.findOne({
        username
    })

    let hashedPassword = await hashing.hash(password , data.key)

    let passwordcheck = await userdata.findOne({
       password : hashedPassword 
    })

    if(passwordcheck) {
        next()
    }

    else{
        res.json({
            message : "Incorrect Details"
        })
        return;
    }

    }

    catch(err) {
        console.log(err);
        res.json({
            message : "something went wrong"
        })
    }

}

module.exports = verifyUser;