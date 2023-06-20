import fs from "fs";
import path from "path";
import {__dirname} from "../../utils.js";

class CartManagerFile{
    constructor(pathFile){
        this.path = path.join(__dirname,`/daos/files/${pathFile}`);
    };

    fileExist(){
        return fs.existsSync(this.path);
    };

    getNewId(products){
        let newId;
        if(!products.length){
            newId=1;
        } else {
            newId=products[products.length-1].id+1;
        }
        return newId;
    };

    async getCarts(){
        try {
            if(this.fileExist()){
                const contenido = await fs.promises.readFile(this.path,'utf-8');
                const contenidoJson = JSON.parse(contenido);
                return contenidoJson;
            } else {
                // console.log("El archivo no existe");
                await fs.promises.writeFile(this.path,JSON.stringify([],null,2));
                return [];
            }
        } catch (error) {
            // console.log(error);
            throw new Error(error);
        }
    };

    async addCart(){
        try {
            const cart={};
            if(this.fileExist()){
                //obtenemos los productos
                const carts = await this.getCarts();
                const newId = this.getNewId(carts);
                cart.id = newId;
                cart.products=[];
                carts.push(cart);
                //reescribimos el archivo
                await fs.promises.writeFile(this.path,JSON.stringify(carts,null,2));
                // console.log("Producto agregado");
                return cart;
            } else{
                // console.log(`El archivo no existe`);
                cart.id = 1;
                cart.products=[];
                await fs.promises.writeFile(this.path,JSON.stringify([cart],null,2));
                return cart;
            }
        } catch (error) {
            // console.log(error);
            throw new Error(error);
        }
    };

    async getCartById(id){
        try {
            if(this.fileExist()){
                const carts = await this.getCarts();
                const cartFound = carts.find(cart=>cart.id===parseInt(id));
                if(cartFound){
                    return cartFound;
                } else{
                    throw new Error("no se encontró el carrito");
                }
            } else {
                throw new Error("El archivo no existe");
            }
        } catch (error) {
            // console.log(error);
            throw new Error(error);
        }
    };

    async addProductToCart(cartId,productId){
        try {
            if(this.fileExist()){
                const carts = await this.getCarts();
                const cartIndex = carts.findIndex(cart=>cart.id===parseInt(cartId));
                if(cartIndex>=0){
                    const cart = carts[cartIndex];
                    //buscamos si el producto ya esta en el carrito
                    const productIndex = cart.products.findIndex(prod=>prod.id===parseInt(productId));
                    if(productIndex>=0){
                        cart.products[productIndex]={
                            ...cart.products[productIndex],
                            quantity:cart.products[productIndex].quantity+1
                        };
                    } else {
                        cart.products.push({
                            id:parseInt(productId),
                            quantity:0
                        });
                    }
                    carts[cartIndex] = {...cart};
                    await fs.promises.writeFile(this.path,JSON.stringify(carts,null,2));
                    return cart;
                } else{
                    throw new Error("no se encontró el carrito");
                }
            } else {
                throw new Error("El archivo no existe");
            }
        } catch (error) {
            throw new Error(error);
        }
    };
}

export {CartManagerFile}