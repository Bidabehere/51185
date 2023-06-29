import { businessModel } from "../models/business.model.js";

export class BusinessMongo{
    constructor(){
        this.model = businessModel;
    }
    async getAllBusiness(){
        try {
            const business = await this.model.find();
            return business;
        } catch (error) {
            console.log(error.message)
            throw new Error("Hubo un error al obtener todos los negocios.")
        }
    }
    async getBusinessById(id){
        try {
            const business = await this.model.findById(id);
            if(!business){
                throw new Error("El negocio no existe.")
            }
            return business;
        } catch (error) {
            console.log(error.message)
            throw new Error("Hubo un error al obtener el negocio.")
        }
    }
    async createBusiness(business){
        try {
            const businessCreated = await this.model.create(business)
            return businessCreated;
           
        } catch (error) {

            console.log(error.message)
            throw new Error("Hubo un error al crear el negocio.")
        }
    }
    async updateBusiness(id,business){
        try {
            const businessUpdate = await this.model.findByIdAndUpdate(id,business,{new:true})
            return businessUpdate;
           
        } catch (error) {

            console.log(error.message)
            throw new Error("Hubo un error al actualizar el negocio.")
        }  
    }
}