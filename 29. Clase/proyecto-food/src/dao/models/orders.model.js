import mongoose from "mongoose";
import { businessCollection, usersCollection,ordersCollection } from "../../constants/index.js";


const ordersSchema = new mongoose.Schema({
    numeroOrden: String,
    negocio:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: businessCollection
    },
    usuario:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: usersCollection
    },
    productos:[],
    precioTotal: Number,
    estado: {
        type: String,
        enum:["pendiente", "completado", "cancelado"],
        default:"pendiente"
    }
})

export const ordersModel = mongoose.model(ordersCollection,ordersSchema);

