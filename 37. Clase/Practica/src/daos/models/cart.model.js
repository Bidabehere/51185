import mongoose from "mongoose";

const cartCollection = "carts";

const cartSchema= new mongoose.Schema({
    products:{
        type: [
            {
                id:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:"products"
                },
                quantity:{
                    type:Number,
                    required:true,
                    default:1
                }
            }
        ],
        required:true,
        default:[]
    }
});

// El parámetro "products.id" se refiere a la propiedad "id" del campo "products" del modelo "Cart".
export const CartModel = mongoose.model(cartCollection,cartSchema);