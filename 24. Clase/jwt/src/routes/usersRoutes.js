import {Router} from 'express';
import { authToken, generateToken } from '../utils.js';

const router = Router();
const users = [];
router.post('/register',(req,res)=>{
    const {first_name, email, password} = req.body;
    //valido como vienen
    const exist = users.find(user => user.email === email);
    if(exist) return res.status(400).send({status:"error", error: "El usuario ya existe!"});
    const user = {
        first_name,
        email,
        password
    }
    users.push(user);
    const access_token = generateToken(user);
    res.send({status:'success', access_token})
})

router.post('/login', (req,res)=>{
    const {email, password} = req.body;
    const user = users.find(user=>user.email === email && user.password === password);
    if(!user) return res.status(400).send({status:"error", error:"Credenciales incorrectas"})
    const access_token = generateToken(user);
    res.send({status:"success", access_token})

})
router.get('/current', authToken, (req,res)=>{
    res.send({status:"success", payload:req.user})
})



export default router;
