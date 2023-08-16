import { Router } from "express";
import {checkRole} from "../middlewares/auth.js";
import { ProductModel} from "../daos/models/product.model.js";

const router = Router();

router.get("/",(req,res)=>{
    res.send("todos los productos");
});

router.post("/", checkRole(["admin","premium"]) , async(req,res)=>{
    try {
        const product = req.body;
        product.owner = req.user._id;
        console.log(product);
        const productCreated = await ProductModel.create(product);
        res.send(productCreated);
    } catch (error) {
        res.send(error.message);
    }
});

router.delete("/:pid", checkRole(["admin","premium"]) , async(req,res)=>{
    try {
        const productId = req.params.pid;
        const product = await ProductModel.findById(productId);
        if(product){
            console.log("product", product);
            const productOwer = JSON.parse(JSON.stringify(product.owner));
            const userId = JSON.parse(JSON.stringify(req.user._id));
            if((req.user.rol === "premium" && productOwer == userId) || req.user.rol === "admin"){
                await ProductModel.findByIdAndDelete(productId);
                return res.json({status:"success", message:"producto eliminado"});
            } else {
                res.json({status:"error", message:"no puedes borrar este producto"})
            }
        } else {
            return res.json({status:"error", message:"El producto no existe"});
        }
    } catch (error) {
        res.send(error.message);
    }
});

router.put("/:pid", checkRole(["admin","superadmin"]) , (req,res)=>{
    res.send("producto agregado");
});

export { router as productsRouter}