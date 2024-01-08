const { userdata } = require("./database");


async function alreadyExisitingUser(req , res , next) {

    try{

        let username = req.headers.username;

        let findings = await userdata.findOne({
            username
        })
    
        if(!findings) {
            next()
        }
        else{
            res.json({
                message : "username already taken"
            })
    
            return;
        }

    }

    catch(err) {
        console.log(err)
        res.json({
            message : "something went wrong"
        })

        return;
    }
  

}

module.exports = alreadyExisitingUser