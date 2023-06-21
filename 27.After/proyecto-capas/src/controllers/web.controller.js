import {ProductManagerMongo} from "../daos/managers/productManagerMongo.js";
import {ProductModel} from "../daos/models/product.model.js";
import { CartManagerMongo } from "../daos/managers/cartManagerMongo.js";
import { CartModel } from "../daos/models/cart.model.js";

const productManager = new ProductManagerMongo(ProductModel);
const cartManager = new CartManagerMongo(CartModel);

export const renderchat = (req,res)=>{
    res.render("chat");
};

export const renderProducts = async(req,res)=>{
    console.log(req.user)
    try {
        const userEmail = req.user.email;
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
        const data ={
            email:userEmail,
            status:"success",
            payload: result.docs,
            totalDocs: result.totalDocs,
            totalPages: result.totalPages,
            prevPage: result.prevPage,
            nextPage: result.nextPage,
            page: result.page,
            hasPrevPage: result.hasPrevPage,
            hasNextPage: result.hasNextPage,
            prevLink: result.hasPrevPage ? `${baseUrl.replace(`page=${result.page}`, `page=${result.prevPage}`)}` : null,
            nextLink: result.hasNextPage ? baseUrl.includes("page") ?
            baseUrl.replace(`page=${result.page}`, `page=${result.nextPage}`) :baseUrl.concat(`?page=${result.nextPage}`) : null
        };
        res.render("products", data);
    } catch (error) {
        // console.log(error.message);
        res.send(`<div>Hubo un error al cargar esta vista</div>`);
    }
};

export const renderProduct = async(req,res)=>{
    try {
        const productId = req.params.pid;
        const product = await productManager.getProductById(productId);
        // console.log("product: ", product);
        res.render("productDetail",product);
    } catch (error) {
        // console.log(error.message);
        res.send(`<div>Hubo un error al cargar esta vista</div>`);
    }
}

export const renderCart = async(req,res)=>{
    try {
        const cartId = req.params.cid;
        const cart = await cartManager.getCartById(cartId);
        // console.log("cart:", cart)
        res.render("cartDetail",cart);
    } catch (error) {
        // console.log(error.message);
        res.send(`<div>Hubo un error al cargar esta vista</div>`);
    }
};

export const renderSignup = (req,res)=>{
    res.render("signup");
};

export const renderLogin = (req,res)=>{
    res.render("login");
}