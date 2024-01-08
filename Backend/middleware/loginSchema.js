const zod = require('zod');

function LoginSchema(req , res , next){
    let usernameSchema = zod.string().min(5).regex(/^(.*[a-zA-Z]){3}/);

    let passwordSchema = zod.string().min(8).regex(/^(?=.*[a-z])/).regex(/^(?=.*[A-Z])/).regex(/^(?=.*\d)/).regex(/^(?=.*[@$!%*?&])/)
    
    let username = req.headers.username;
    let password = req.headers.password;

    let testUsername = usernameSchema.safeParse(username);
    let testPassword = passwordSchema.safeParse(password);

    if(testUsername.success && testPassword) {
        next()
    }
    else(
        res.json({
            message :"Login Schema InCorrect"
        })
    )
}


module.exports = LoginSchema;