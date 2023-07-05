import mongoose from "mongoose";

const productCollection = "products";

const productSchema= new mongoose.Schema({
    title: {type: String,required:true},
    price: { type: Number,required:true,min:1},
    code: {type: String,required:true},
    stock: {type: Number,required:true},
    category:{ type: String,required:true,enum: ['Deportes', 'Tecnología','Ropa']},
});

export const ProductModel = mongoose.model(productCollection,productSchema);