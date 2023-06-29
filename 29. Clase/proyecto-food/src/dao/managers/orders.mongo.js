import { ordersModel } from "../models/orders.model.js";

export class OrdersMongo{
    constructor(){
        this.model = ordersModel;
    }
    async getAllOrders(){
        try {
           
            const orders = await this.model.find();
            return orders;
        } catch (error) {
            console.log(error.message)
            throw new Error("Hubo un error al tratar de traer todas las ordenes.")
        }
    }
    async getOrderById(id){
        try {
            const order = await this.model.findById(id);
            if(!order){
                throw new Error("La orden no existe.");
            }
            return order;
        } catch (error) {
            console.log(error.message)
            throw new Error("Hubo un error al tratar de traer la orden.")
        }
    }
    async createOrder(order){
        try {
            const orderCreated = await this.model.create(order)
            return orderCreated;
        } catch (error) {
            console.log(error.message)
            throw new Error("Hubo un error al tratar de traer la orden.")
        }
    }
    async updateOrder(id, order){
        try {
            const orderUpdate = await this.model.findByIdAndUpdate(id,order, {new: true})
            return orderUpdate;
        } catch (error) {
            console.log(error.message)
            throw new Error("Hubo un error al tratar de actualizar la orden.")
        }
    }
}