const jwt = require('jsonwebtoken');

let KEY = "JWTKEY"

function sendJWT(req , res , next) {

    let username = req.headers.username;

    let JWT = jwt.sign({
        username
    } , KEY)

    res.setHeader('Authorization' , `Barer ${JWT}`)

    next();


}

module.exports = sendJWT;