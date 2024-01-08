const express = require('express');
const LoginSchema = require('./middleware/loginSchema');
const saveuserData = require('./middleware/saveuserdata');
const Hash = require('./hashing');
const alreadyExisitingUser = require('./middleware/alreadyExistingUser');
const verifyUser = require('./middleware/verifyUser');
const sendJWT = require('./middleware/sendJWT');
const ToDoRouter = express.Router();

ToDoRouter.put('/create' , LoginSchema , alreadyExisitingUser , Hash,saveuserData, (req , res)=>{
    let username = req.headers.username;
    let password = req.headers.password;
    res.json({
        message : "Account Has Been Created"
    })
    
})

ToDoRouter.get('/Login' , LoginSchema , verifyUser  , sendJWT, (req , res)=>{    
    res.json({
        message : "user verified"
    })

} )

module.exports = {
    ToDoRouter
}