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
export const checkAuthenticated = ( req,res,next ) =>{
    if(req.user){
        next();
    }else{
        return res.json({status:"error", message:"Necesita estar autenticado"});
    }
}