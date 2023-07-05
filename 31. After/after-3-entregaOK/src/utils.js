import path from "path";
import bcrypt from "bcrypt";
import {fileURLToPath} from 'url';
export const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const createHash = (password)=>{
    return bcrypt.hashSync(password, bcrypt.genSaltSync());
};

export const isValidPassword = (password, user)=>{
    return bcrypt.compareSync(password, user.password)
}