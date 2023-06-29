import { userModel } from "../models/users.model.js";

export class UserMongo{
    constructor(){
        this.model = userModel;
    }
    async getUsers(){
        try {
            const users = await this.model.find();
            return users;
        } catch (error) {
            
            console.log(error.message)
            throw new Error("Hubo un error al traer todos los usuarios.")
        }
    }
    async getUserById(id){
        try {
            const user = await this.model.findById(id);
            if(!user){
                throw new Error("El usuario no existe.")
            }
            return user;
        } catch (error) {
            console.log(error.message)
            throw new Error("Hubo un error al traer el usuario.") 
        }
    }
    async saveUser(user){
        try {
            const userCreated = await this.model.create(user);
            return userCreated;
        } catch (error) {
            console.log(error.message)
            throw new Error("Hubo un error al tratar de crear el usuario.") 
        }
    }
    async updateUser(id, user){
        try {
            const userUpdate = await this.model.findByIdAndUpdate(id,user, {new:true})
            return userUpdate;
        } catch (error) {
            console.log(error.message)
            throw new Error("Hubo un error al tratar de actualizar el usuario.")   
        }
    }
}