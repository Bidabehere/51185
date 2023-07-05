import { Router } from 'express';
import { generateUser } from '../utils.js';

const router = Router();


router.get('/', (req,res)=>{
    const cant = parseInt(req.query.cant) || 100;
    let users = [];
    for (let i = 0; i < cant; i++) {
        const user = generateUser();
        users.push(user)
    }
    res.json({users})
})

export {router as userRouter};