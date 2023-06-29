import { userDao } from "../dao/index.js";

export const getUsers = async(req,res) =>{
    try {
        const users = await userDao.getUsers();
        res.send({status:"success", result:users})
    } catch (error) {
        res.send({status:"error", result:error.message})
    }
}
export const getUsersById = async(req,res) =>{
    try {
        const userId = req.params.uid;
        const user = await userDao.getUserById(userId);
        res.send({status:"success", result:user})
    } catch (error) {
        res.send({status:"error", result:error.message})
    }
}
export const saveUser = async(req,res) =>{
    try {
        const userCreated = await userDao.saveUser(req.body);
        res.send({status:"success", result:userCreated})
    } catch (error) {
        res.send({status:"error", result:error.message})
    }
}