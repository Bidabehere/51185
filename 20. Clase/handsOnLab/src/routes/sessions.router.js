import { Router } from 'express';
import userModel from '../models/User.model.js';
import { createHash, validatePassword } from '../utils.js';

const router = Router();

router.post('/register', async (req, res) =>{

    const {first_name, last_name, email, age, password} = req.body;

    const exist = await userModel.findOne({email});
    if(exist){
        return res.status(400).send({status:"error", error:"User already exists"});
    }
    const user = {
        first_name, last_name, email, age, password: createHash(password)
    };

    const result = await userModel.create(user);
    res.send({status:"succes", message:"User registered"});

})

router.post('/login', async (req,res)=>{
    const { email, password } = req.body;
    const user = await userModel.findOne({email})

    if(!user){
        return res.status(400).send({status:"error", error:"Datos incorrectos"})
    }
    const isValidPassword = validatePassword(password,user);
  
    if(!isValidPassword) return res.status(400).send({status:"error", error:"Datos incorrectos"})

    req.session.user = {
        name: `${user.first_name} ${user.last_name}`,
        email: user.email,
        age: user.age
    }
    res.send({status:"success", payload:req.res.user, message:"Primer logueo!!"})
    
})

router.get('/logout', (req,res)=>{
    req.session.destroy(err =>{
        if(err) return res.status(500).send({status:"error", error:"No pudo cerrar sesion"})
        res.redirect('/login');
    })
})

router.post('/restartPassword', async (req, res)=>{
    const {email, password } = req.body;
    
    if(!email || !password ) return res.status(400).send({status:"error", error:"Datos incorrectos"})

    const user = await userModel.findOne({email});
    if(!user) return res.status(400).send({status:"error", error:"Datos incorrectos"})
    
    const newHashedPassword = createHash(password);

    await userModel.updateOne({_id:user._id},{$set:{password:newHashedPassword}});

    res.send({status:"success", message:"Contraseña actualizada"})
})

export default router;