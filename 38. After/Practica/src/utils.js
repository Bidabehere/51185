import path from "path";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {options} from "./config/options.js";

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