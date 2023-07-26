export const checkRole = (roles)=>{
    return (req,res,next)=>{
        if(!req.user){
            return res.json({status:"error", message:"necesitas estar autenticado"});
        }
        if(!roles.includes(req.user.rol)){
            return res.json({status:"error", message:"no estas autorizado"});
        }
        next();
    }
}