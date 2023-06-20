import {Router} from "express";
// import { CartManagerFile } from "../daos/managers/cartManagerFile.js";
// import { ProductManagerFile } from "../daos/managers/productManagerFile.js";
import { CartManagerMongo } from "../daos/managers/cartManagerMongo.js";
import { ProductManagerMongo } from "../daos/managers/productManagerMongo.js";
import { CartModel } from "../daos/models/cart.model.js";
import { ProductModel } from "../daos/models/product.model.js";

//servicio
// const cartManager = new CartManagerFile("carts.json");
// const productManager = new ProductManagerFile("products.json");
const cartManager = new CartManagerMongo(CartModel);
const productManager = new ProductManagerMongo(ProductModel);

const router = Router();

//agregar carrito
router.post("/",async(req,res)=>{
    try {
        const cartAdded = await cartManager.addCart();
        res.json({status:"success", result:cartAdded, message:"cart added"});
    } catch (error) {
        res.status(400).json({status:"error", error:error.message});
    }
});

//ruta para listar todos los productos de un carrito
router.get("/:cid",async(req,res)=>{
    try {
        const cartId = req.params.cid;
        //obtenemos el carrito
        const cart = await cartManager.getCartById(cartId);
        res.json({status:"success", result:cart});
    } catch (error) {
        res.status(400).json({status:"error", error:error.message});
    }
});

//ruta para agregar un producto al carrito
router.post("/:cid/product/:pid",async(req,res)=>{
    try {
        const cartId = req.params.cid;
        const productId = req.params.pid;
        const cart = await cartManager.getCartById(cartId);
        // console.log("cart: ", cart);
        const product = await productManager.getProductById(productId);
        // console.log("product: ", product);
        const cartUpdated = await cartManager.addProductToCart(cartId, productId);
        res.json({status:"success", result:cartUpdated, message:"product added"});
    } catch (error) {
        res.status(400).json({status:"error", error:error.message});
    }
});

//ruta para eliminar un producto del carrito
router.delete("/:cid/product/:pid",async(req,res)=>{
    try {
        const cartId = req.params.cid;
        const productId = req.params.pid;
        const cart = await cartManager.getCartById(cartId);
        // console.log("cart: ", cart);
        const product = await productManager.getProductById(productId);
        // // console.log("product: ", product);
        const response = await cartManager.deleteProduct(cartId, productId);
        res.json({status:"success", result:response, message:"product deleted"});
    } catch (error) {
        res.status(400).json({status:"error", error:error.message});
    }
});

//ruta para actualizar todos los productos de un carrito.
router.put("/:cid",async(req,res)=>{
    try {
        const cartId = req.params.cid;
        const products = req.body.products;
        const cart = await cartManager.getCartById(cartId);
        cart.products = [...products];
        const response = await cartManager.updateCart(cartId, cart);
        res.json({status:"success", result:response, message:"cart updated"});
    } catch (error) {
        res.status(400).json({status:"error", error:error.message});
    }
});


//ruta para actualizar cantidad de un producto en el carrito
router.put("/:cid",async(req,res)=>{
    try {
        const cartId = req.params.cid;
        const products = req.body.products;
        const cart = await cartManager.getCartById(cartId);
        cart.products = [...products];
        const response = await cartManager.updateCart(cartId, cart);
        res.json({status:"success", result:response, message:"cart updated"});
    } catch (error) {
        res.status(400).json({status:"error", error:error.message});
    }
});

//ruta para actualizar la cantidad de un producto en el carrito
router.put("/:cid/product/:pid",async(req,res)=>{
    try {
        const cartId = req.params.cid;
        const productId = req.params.pid;
        const quantity = req.body.quantity;
        await cartManager.getCartById(cartId);
        await productManager.getProductById(productId);
        const response = await cartManager.updateQuantityInCart(cartId, productId, quantity);
        res.json({status:"success", result: response, message:"producto actualizado"});
    } catch (error) {
        res.status(400).json({status:"error", error:error.message});
    }
});

//ruta para eliminar todos los productos del carrito
router.delete("/:cid",async(req,res)=>{
    try {
        const cartId = req.params.cid;
        const cart = await cartManager.getCartById(cartId);
        cart.products=[];
        const response = await cartManager.updateCart(cartId, cart);
        res.json({status:"success", result: response, message:"productos eliminados"});
    } catch (error) {
        res.status(400).json({status:"error", error:error.message});
    }
});

export {router as cartsRouter};