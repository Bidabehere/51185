// import { ProductManagerFile } from "../daos/managers/productManagerFile.js";
import {ProductManagerMongo} from "../daos/managers/productManagerMongo.js";
//importamos el modelo de productos
import {ProductModel} from "../daos/models/product.model.js";
import { checkValidProductFields } from "../middlewares/validations.js";

//services
// const productManager = new ProductManagerFile('products.json');
const productManager = new ProductManagerMongo(ProductModel);

export const getProductsController = async(req,res)=>{
    try {
        const {limit = 10,page=1,category,stock,sort="asc"} = req.query;
        const stockValue = stock==0 ? undefined : parseInt(stock);
        if(!["asc","desc"].includes(sort)){
            return res.json({status:"error", mesage:"orden no valido"});
        };
        const sortValue= sort === "asc" ? 1 : -1;
        // console.log('limit: ', limit, "page: ", page,"category: ", category, "stockValue: ", stockValue, "sortValue: ", sortValue);
        let query={};
        if (category && stockValue) {
            query = { category: category, stock: {$gte:stockValue} };
        } else {
            if (category || stockValue) {
                if (category) {
                  query = { category: category };
                } else {
                  query = { stock: {$gte:stockValue} };
                }
            }
        };
        // console.log("query: ", query);
        const result = await productManager.getPaginateProducts(
            query,
            {
                page,
                limit,
                sort:{price:sortValue},
                lean:true,
            }
        );
        // console.log("result: ", result);
        const baseUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
        res.json({
            status:"success",
            payload: result.docs,
            totalDocs: result.totalDocs,
            totalPages: result.totalPages,
            prevPage: result.prevPage,
            nextPage: result.nextPage,
            page: result.page,
            hasPrevPage: result.hasPrevPage,
            hasNextPage: result.hasNextPage,
            prevLink: result.hasPrevPage ? `${baseUrl}?page=${result.prevPage}` : null,
            nextLink: result.hasPrevPage ? `${baseUrl}?page=${result.prevPage}` : null
        });
    } catch (error) {
        res.status(400).json({status:"error",message:error.message});
    }
}

export const getProductController = async(req,res)=>{
    try {
        const {pid} = req.params;
        const product = await productManager.getProductById(pid);
        // console.log("product: ", product);
        res.status(200).json({status:"success", result:product});
    } catch (error) {
        res.status(400).json({message:error.message});
    }
}

export const createProductController = async(req,res)=>{
    try {
        const body = req.body;
        body.status = Boolean(body.status);
        body.price = Number(body.price);
        body.stock = Number(body.stock);
        // console.log("body: ", body);
        const productAdded = await productManager.addProduct(body);
        res.json({status:"success", result:productAdded, message:"product added"});
    } catch (error) {
        res.status(400).json({status:"error",message:error.message});
    }
}

export const updateProductController = async(req,res)=>{
    try {
        const productId = req.params.pid;
        const body = req.body;
        body.status = Boolean(body.status);
        body.price = Number(body.price);
        body.stock = Number(body.stock);
        // console.log("body: ", body);
        //actualizamos el método, pasándole el id y el body
        const productUpdated = await productManager.updateProduct(productId,body);
        res.json({status:"success", result:productUpdated, message:"product updated"});
    } catch (error) {
        res.status(400).json({message:error});
    }
}

export const deleteProductController = async(req,res)=>{
    try {
        const productId = req.params.pid;
        //luego eliminamos el producto
        const productdeleted = await productManager.deleteProduct(productId);
        res.json({status:"success", result:productdeleted.message});
    } catch (error) {
        res.status(400).json({message:error});
    }
}