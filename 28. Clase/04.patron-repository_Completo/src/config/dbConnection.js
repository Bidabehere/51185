import mongoose from "mongoose";
import { options } from "./config.js";

export const connectDB = async()=>{
    try {
        await mongoose.connect(options.mongo.url);
        console.log("conectado a la base de datos");
    } catch (error) {
        console.log(`Hubo un error al conectar la base de datos ${error.message}`);
    }
}