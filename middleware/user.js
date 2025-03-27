const jwt = require ("jsonwebtoken");
const jwt_pass = process.env.JWT_SECRET_KEY_USER;
function authUser(req, res, next){
    const token = req.headers.token;
    const verified = jwt.verify(token, jwt_pass);
    if(verified){
        req.userId = verified.id;
        next()
    }
    else{
        res.json({
            message: "User is not signed in"
        })
    }
}

module.exports={
    authUser : authUser,
}