import {Router} from 'express';

const router = Router();

router.get('/', (req,res)=>{
    res.render('home');
})
router.get('/register', (req,res)=>{
    res.render('register')
})
router.get('/login',(req,res)=>{
    res.render('login')
})


/* app.get('/',(req,res)=>{
    res.render('home');
})

app.get('/register',(req,res)=>{
    res.render('register');
})

app.get('/login',(req,res)=>{
    res.render('login')
}) */

export default router;
