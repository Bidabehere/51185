import path from "path";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {options} from "./config/options.js";
import multer from "multer";


import {fileURLToPath} from 'url';
export const __dirname = path.dirname(fileURLToPath(import.meta.url));


export const createHash = (password)=>{
    return bcrypt.hashSync(password, bcrypt.genSaltSync());
};

export const isValidPassword = (password, user)=>{
    return bcrypt.compareSync(password, user.password)
};

export const generateEmailToken = (email,expireTime)=>{
    const token = jwt.sign({email},options.gmail.emailToken,{expiresIn:expireTime});
    return token;
};

export const verifyEmailToken = (token)=>{
    try {
        const info = jwt.verify(token,options.gmail.emailToken);
        return info.email;
    } catch (error) {
        console.log(error.message);
        return null;
    }
};

//configuracion para guardar imagenes de usuarios

const validFields = (body) => {
    const {name, email, password} = body;
    if(!name || !email || !password){
        return false;
    }else{
        return true;
    }
};

//filtro para validar los campos de cargar la imagen
const multerFilterProfile = (req,file,cb)=>{
    const isValid = validFields(req.body);
    if(isValid){
        cb(null,true)
    }else{
        cb(null,false)
    }
}

const profileStorage = multer.diskStorage({
    //donde guardo los archivos
    destination: function(req,file,cb) {
      cb(null,path.join(__dirname,"/multer/users/images"))  
    },
    //el nombre del archivo que estamos guardando
    filename: function (req,file,cb) {
        cb(null,`${req.body.email}-perfil-${file.originalname}`)
    }
})
//Creamos el uploader de multer
export const uploaderProfile = multer({storage:profileStorage,fileFilter:multerFilterProfile })

//Configuracion para guardar documentos de los usuarios

const documentStorage = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null,path.join(__dirname,"/multer/users/documents"));
    },
    filename: function(req,file,cb) {
        console.log("req.body")
        console.log(req.user.email)
        console.log("req.body")
        cb(null,`${req.user.email}-document-${file.originalname}`);
    }
})

//creamos el uploader
export const uploaderDocument = multer({storage:documentStorage});

//configuracion para guardar imagenes de productos
const productStorage= multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null,path.join(__dirname,"/multer/products/images"));
    },
    filename: function(req,file,cb) {
        cb(null,`${req.body.code}-image-${file.originalname}`);
    }
})

export const uploaderProduct = multer({storage:productStorage})