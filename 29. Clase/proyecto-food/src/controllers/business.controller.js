import { businessDao } from "../dao/index.js"
import {v4 as uuidv4} from 'uuid';

export const getAllBusiness = async(req,res) =>{

    try {   
        const business = await businessDao.getAllBusiness()
        res.send({status:"success", result:business})
    } catch (error) {
        res.send({status:"error", message: error.message })
    }

}
export const getBusinessById = async(req,res) =>{
    try {   
        const business = await businessDao.getBusinessById(req.params.id)
        res.send({status:"success", result:business})
    } catch (error) {
        res.send({status:"error", message: error.message })
    }
}
export const createBusiness = async(req,res) =>{
    try {   
        const businessCreated = await businessDao.createBusiness(req.body)
        res.send({status:"success", result:businessCreated})
    } catch (error) {
        res.send({status:"error", message: error.message })
    }
}
export const addProduct = async(req,res) =>{
    try {   
       const businessId = req.params.bid;
       const product = req.body;
       if(!product.titulo || !product.precio){
        return res.send({status:"error", message: "Campos incompletos"})
       }
       const business = await businessDao.getBusinessById(businessId);
       product.id = uuidv4();
       business.productos.push(product);
       const businessUpdate = await businessDao.updateBusiness(businessId,business);
        res.send({status:"success", result: businessUpdate})
    } catch (error) {
        res.send({status:"error", message: error.message })
    }
}
