const mongoose = require('mongoose');

mongoose.connect('****');

const userSchema = new mongoose.Schema({
    username : String , password : String , key : String
})

const userdata = mongoose.model('userdetails' , userSchema)

module.exports = {
    userdata
}