export function authBasic(req, res, next){
    if(req.user == null){
        return res.status(403).json("You need to SignUp or LogIn");
    }
    next();
}

export function authRole(role){
    return (req, res, next)=>{
        if(req.user.role !== role){
            return res.status(401).json("Not Accesaable for",req.user.role);
        }
        next();
    }
}
