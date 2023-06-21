import mongoose from "mongoose";

class CartManagerMongo{
    constructor(model){
        this.model = model;
    }

    async getCarts(){
        try {
            const data = await this.model.find();
            const response = JSON.parse(JSON.stringify(data));
            return response;
        } catch (error) {
            throw new Error(error.message);
        }
    };

    async addCart(){
        try {
            const cart={};
            const data = await this.model.create(cart);
            const response = JSON.parse(JSON.stringify(data));
            return response;
        } catch (error) {
            throw new Error(`Error al guardar: ${error.message}`);
        }
    };

    async getCartById(id){
        try {
            //Comprobación de la estructura y validez del Id del carrito recibido por parámetro
            if (id.trim().length != 24) {
                throw new Error("El Id del carrito ingresado no es válido");
            }
            const data = await this.model.find({_id:id});
            // console.log("data: ", data);
            if(data){
                const response = JSON.parse(JSON.stringify(data));
                return response[0];
            }
            throw new Error(`No se encontró el carrito con el id ${id}`);
        } catch (error) {
            throw new Error(error.message);
        }
    };

    async addProductToCart(cartId,productId){
        try {
            const cart = await this.getCartById(cartId);
            const productIndex = cart.products.findIndex(prod=>prod.id==productId);
            if(productIndex>=0){
                cart.products[productIndex].quantity = cart.products[productIndex].quantity+1;
            } else {
                cart.products.push({
                    id:productId,
                    quantity:1
                });
            };
            const data = await this.model.findByIdAndUpdate(cartId, cart,{new:true});
            const response = JSON.parse(JSON.stringify(data));
            return response;
        } catch (error) {
            throw new Error(error.message);
        }
    };

    async deleteProduct(cartId,productId){
        try {
            const cart = await this.getCartById(cartId);
            const productIndex = cart.products.findIndex(prod=>prod.id==productId);
            if(productIndex>=0){
                const newProducts = cart.products.filter(prod=>prod.id!=productId);
                cart.products = [...newProducts];
                const data = await this.model.findByIdAndUpdate(cartId, cart,{new:true});
                return data;
            } else {
                throw new Error(`El producto no existe en el carrito`);
            };
        } catch (error) {
            throw new Error(`Error al eliminar el producto: ${error.message}`);
        }
    };

    async updateCart(id, cart){
        try {
            await this.model.findByIdAndUpdate(id,cart);
            return "Carrito actualizado";
        } catch (error) {
            throw new Error(error.message)
        }
    };

    async updateQuantityInCart(cartId, productId,quantity){
        try {
            const cart = await this.getCartById(cartId);
            const productIndex = cart.products.findIndex(prod=>prod.id==productId);
            if(productIndex>=0){
                cart.products[productIndex].quantity = quantity;
            } else {
                throw new Error("El producto no existe en el carrito");
            };
            const data = await this.model.findByIdAndUpdate(cartId, cart,{new:true});
            const response = JSON.parse(JSON.stringify(data));
            return response;
        } catch (error) {
            throw new Error(error.message)
        }
    };

}

export {CartManagerMongo}