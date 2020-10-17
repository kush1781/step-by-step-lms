const jwt =  require("jsonwebtoken");
const secret = require("../../config/keys").secretOrKey;

module.exports = (req,res,next) => {
    try{
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, secret);
        next();
    }
    catch(err){
        return res.status(401).json({
            message: "Auth failed, Token is not valid or has expired"
        })
    }
}