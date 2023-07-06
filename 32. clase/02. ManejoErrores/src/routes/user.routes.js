import { Router } from "express";
import { CustomError } from "../services/customError.service.js";
import { EError } from "../enums/EError.js";
import { generateUserErrorInfo } from "../services/userErrorInfo.js";
import { generateUserErrorParam } from "../services/userErrorParam.js";


const router = Router();

const users = [];

router.get("/", (req,res)=>{
    res.json({status:"succes",data:users})
})

router.post("/", (req,res)=>{
    const {first_name, last_name, email} = req.body;
    if(!first_name || !last_name || !email){
        CustomError.createError({
            name: "User create error",
            cause: generateUserErrorInfo(req.body),
            message: "Error creando el Usuario",
            errorCode: EError.INVALID_JSON
        });
    };
    const newUser = {
        id: users.length +1,
        first_name,
        last_name,
        email
    }
    users.push(newUser);
       
    res.json({status:"succes",data:users})
})

router.get("/:uid", (req,res)=>{
   const {uid} = req.params;
   const userID = parseInt(uid);
   if(Number.isNaN(userID)){
    CustomError.createError({
        name: "User get by id error",
        cause:generateUserErrorParam(uid),
        message:"Error obteniendo el usuario por el id",
        errorCode: EError.INVALID_PARAM
    })
   }
   const user = users.find(u=>u.id === userID);
   if(user){
        res.json({status:"succes",data:user})
    }else{
        res.json({status:"error",message:"Usuario no encontrado"})
    }
})


export {router as usersRouter}