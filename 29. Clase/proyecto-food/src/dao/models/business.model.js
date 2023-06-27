import mongoose from "mongoose";
import { businessCollection } from "../../constants.js";


const businessSchema = new mongoose.Schema({
    nombre: String,
    productos:[]
})

export const businessModel = mongoose.model(businessCollection, businessModel);