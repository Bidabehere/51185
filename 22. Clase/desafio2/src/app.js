import express from 'express';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import initilizePassport from './config/passport.config.js';
import passport from 'passport';

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.static('./src/public'));
app.use(cookieParser());
initilizePassport();
app.use(passport.initialize());

app.listen(PORT, ()=>{
    console.log('Servidor funcionando en el puerto: ' + PORT);
})


app.post('/login', (req,res)=>{
    const { email, password } = req.body;

    if(email=="coder@coder.com" && password === "coderpass"){
        const token =  jwt.sign({email,password}, 'coderSecret',{expiresIn:"24h"})
        res.cookie('coderCokie', token, {httpOnly:true}).send({status:"success", message:'Ingreso correcto', token})
    }else{
        res.status(400).send({status:"error", error:"Credenciales incorrectas"})
    }

})

app.get('/current', passport.authenticate('jwt', {session:false}), (req,res)=>{
    res.send(req.user);
})

