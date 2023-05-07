import { Router } from "express";
import ManagerAcces from "../Dao/managers/ManagerAcces.js";


const router = Router();
const managerAcces = new ManagerAcces();

router.get('/', async (req,res)=>{
    await managerAcces.crearRegistro('GET');
    res.send({msg: 'GET'})
})
router.post('/', async (req,res)=>{
    await managerAcces.crearRegistro('POST');
    res.send({msg:'POST'})
})

export default router;