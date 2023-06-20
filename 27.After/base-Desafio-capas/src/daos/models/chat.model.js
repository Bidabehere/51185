import mongoose from "mongoose";

const chatCollection = "messages";

const chatSchema= new mongoose.Schema({
    user:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
});

export const ChatModel = mongoose.model(chatCollection,chatSchema);