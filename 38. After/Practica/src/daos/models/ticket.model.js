import mongoose from "mongoose";

const ticketsCollection = "tickets";

const ticketsSchema = new mongoose.Schema({
    code:{
        type:String,
        required:true,
        unique:true
    },
    purchase_datetime: Date,
    amount:Number,
    purchaser:{
        type:String,
        required:true
    }
});

export const ticketsModel = mongoose.model(ticketsCollection, ticketsSchema);