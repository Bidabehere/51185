import { Router } from 'express';
import { uploader } from '../utils.js';

const router = Router();

const pets = [];

router.get('/', (req,res)=>{
    
    res.send({pets})

})

router.post('/',uploader.single('thumbnail'), (req,res)=>{
    const pet = req.body;

    const filename = req.file.filename;

    pet.thumbnail = `http://localhost:8080/images/${filename}`;

    pets.push(pet);

    res.send({
        status: 'Success',
        pet
    })
})



export default router;