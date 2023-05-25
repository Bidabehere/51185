import jwt from 'jsonwebtoken';

const PRIVATE_KEY = 'CoderKEY';

export const generateToken = (user) =>{
    const token = jwt.sign({user},PRIVATE_KEY,{expiresIn:'1d'});
    return token;
}

export const authToken = (req,res, next) => {
    const autHeader = req.headers.authorization;
    if(!autHeader) return res.status(401).send({status:"Error", error:"No autorizado"})
    console.log(autHeader);
    const token = autHeader.split(' ')[1];
    jwt.verify(token, PRIVATE_KEY, (error, credentials)=>{
        console.log(error)
        if(error) return res.status(401).send({status:"Error", error:"No autorizado"})
        req.user = credentials.user;
        next()
    })
}


