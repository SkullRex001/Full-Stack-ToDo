const { userdata } = require("./database");


async function saveuserData(req , res , next) {
  try{

    let username = req.headers.username;
    let UserHashpassword = req.hashedPassword;
    let UserKey = req.salt
    

     await userdata.create({
        username , password : UserHashpassword , key: UserKey
    })

    next();

  }

  catch(err) {
    res.json({
        message : "oops something went wrong"

    })

    console.log(err);

  }
    

}

module.exports = saveuserData;