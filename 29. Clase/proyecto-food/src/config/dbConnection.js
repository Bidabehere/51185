import mongoose from "mongoose";
import { options } from "./options.js";

export const connectDB = async () => {
    try {
        await mongoose.connect(options.mongo.url);
        console.log("Base de datos conectada.")        
    } catch (error) {
        console.log(error.message)
    }
}
