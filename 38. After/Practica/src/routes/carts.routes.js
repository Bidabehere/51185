import { Router } from "express";
import { CartModel} from "../daos/models/cart.model.js";
import { ProductModel} from "../daos/models/product.model.js";
import {v4 as uuidv4} from 'uuid';
import { ticketsModel } from "../daos/models/ticket.model.js";

const router = Router();

router.post("/",async(req,res)=>{
    try {
        const cartCreated = await CartModel.create({});
        res.send(cartCreated)
    } catch (error) {
        res.send(error.message)
    }
});

router.put("/",async(req,res)=>{
    try {
        const {cartId, productId, quantity} = req.body;
        const cart = await CartModel.findById(cartId);
        cart.products.push({id:productId,quantity:quantity});
        cart.save();
        res.send("producto agregado")
    } catch (error) {
        res.send(error.message)
    }
});

router.post("/:cid/purchase",async(req,res)=>{
    try {
        const cartId = req.params.cid;
        const cart = await CartModel.findById(cartId);
        if(cart){
            if(!cart.products.length){
                return res.send("es necesario que agrege productos antes de realizar la compra")
            }
            const ticketProducts = [];
            const rejectedProducts = [];
            for(let i=0; i<cart.products.length;i++){
                const cartProduct = cart.products[i];
                const productDB = await ProductModel.findById(cartProduct.id);
                //comparar la cantidad de ese producto en el carrito con el stock del producto
                if(cartProduct.quantity<=productDB.stock){
                    ticketProducts.push(cartProduct);
                } else {
                    rejectedProducts.push(cartProduct);
                }
            }
            console.log("ticketProducts",ticketProducts)
            console.log("rejectedProducts",rejectedProducts)
            const newTicket = {
                code:uuidv4(),
                purchase_datetime: new Date().toLocaleString(),
                amount:500,
                purchaser:req.user.email
            }
            const ticketCreated = await ticketsModel.create(newTicket);
            res.send(ticketCreated)
        } else {
            res.send("el carrito no existe")
        }
    } catch (error) {
        res.send(error.message)
    }
});

export {router as cartsRouter}