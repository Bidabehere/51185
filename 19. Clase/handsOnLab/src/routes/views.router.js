import { Router } from 'express';

const router = Router();


const publicAcces = (req,res,next) =>{
    if(req.session.user) return res.redirect('/profile');
    next();
}

const privateAcces = (req,res,next)=>{
    if(!req.session.user) return res.redirect('/login');
    next();
}


router.get('/register', publicAcces, (req,res)=>{
    res.render('register')
})

router.get('/login', publicAcces, (req,res)=>{
    res.render('login')
})

router.get('/profile', privateAcces ,(req,res)=>{
    res.render('profile',{
        user: req.session.user
    })
})

export default router;


