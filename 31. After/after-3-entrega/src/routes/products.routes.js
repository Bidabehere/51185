import { Router } from "express";
import {checkRole} from "../middlewares/auth.js";
import { ProductModel} from "../daos/models/product.model.js";

const router = Router();

router.get("/", async (req,res)=>{
    const products = await ProductModel.find()
    res.send(products);
});

router.post("/", checkRole(["admin"]) , async(req,res)=>{
    try {
        const productCreated = await ProductModel.create(req.body);
        res.send(productCreated);
    } catch (error) {
        res.send(error.message);
    }
});

router.put("/:pid", checkRole(["admin","superadmin"]) , (req,res)=>{
    res.send("producto agregado");
});

export { router as productsRouter}