import { Router } from 'express';
import userModel from '../models/User.model.js';

const router = Router();


const publicAcces = (req,res,next) =>{
    if(req.session.user) return res.redirect('/profile');
    next();
}

const adminAcces = (req,res,next) =>{
    console.log(req.session.user.rol);
    if(req.session.user.rol !== 'Admin'){
        console.log('Solo se admite rol Admin');
        return res.redirect('/');
    } 
    next();
}

const privateAcces = (req,res,next)=>{
    if(!req.session.user) return res.redirect('/login');
    next();
}


router.get('/register', publicAcces, (req,res)=>{
    res.render('register')
})

router.get('/', publicAcces, (req,res)=>{
    res.render('login')
})

router.get('/profile', privateAcces ,(req,res)=>{
    res.render('profile',{
        user: req.session.user
    })
})

router.get('/users', privateAcces, adminAcces, async (req,res)=>{
    const users = await userModel.find().lean();
    const user = req.session.user;

     res.render('users', {
        users, user
    }) 
})

export default router;


