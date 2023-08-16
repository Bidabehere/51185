import mongoose from "mongoose";
import { ProductModel } from "../daos/models/product.model.js";
import { connectDB} from "../config/dbConnection.js";

connectDB();
//funcion para agregar el owner a cada producto
const updateProducts = async()=>{
    try {
        const adminId = "648b8e10e6c8a1536f40ec00";
        const result = await ProductModel.updateMany({},{$set:{owner:adminId}});
        console.log("result", result);
    } catch (error) {
        console.log(error.message);
    }
}
updateProducts();