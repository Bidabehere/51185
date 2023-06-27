import mongoose from "mongoose";
import { ordersCollection, usersCollection } from "../../constants.js";

const userSchema = new mongoose.Schema({
    nombre: String,
    correo:String,
    rol: String,
    pedidos:[
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: ordersCollection
        }
    ]
})

export const userModel = mongoose.model(usersCollection, userSchema);