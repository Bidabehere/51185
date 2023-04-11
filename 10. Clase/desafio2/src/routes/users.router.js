import {Router} from 'express';


const router = Router();

const users = [];

router.post('/', (req,res)=>{

    const user = req.body;
     console.log(user)
    users.push(user);
    res.send({
        status: 'Success',
        users
    })
})

router.get('/', (req,res)=>{
    res.send({users})
})

export default router;
