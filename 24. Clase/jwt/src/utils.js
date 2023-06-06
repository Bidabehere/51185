import { fileURLToPath } from 'url';
import { dirname } from 'path';
import jwt from 'jsonwebtoken';

const PRIVATE_KEY = 'CoderKey';

export const generateToken = (user) =>{
    const token = jwt.sign({user}, PRIVATE_KEY,{expiresIn:'1d'})
    return token;
}
export const authToken = (req,res,next) =>{
    const authHeader = req.headers.authorization;
    const token = authHeader.split(' ')[1];
    if(token==='null'){
        return res.status(401).send({status:"error", error: "Error en el token."})
    }
    jwt.verify(token, PRIVATE_KEY,(error, credentials)=>{
        if(error) return res.status(401).send({status:"error", error:'Error en el token.'})
        req.user = credentials.user;
        next();
    })
}


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export default __dirname;