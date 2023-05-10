import mongoose from "mongoose";

const productCollection = "products";

const productSchema = mongoose.Schema({
    title: String,
    description: String,
    quantity: Number
})

const productModel = mongoose.model(productCollection, productSchema);

export default productModel;