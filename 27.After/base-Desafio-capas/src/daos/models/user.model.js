import mongoose from "mongoose";

const userCollection = "users";

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email: {
        type: String,
        unique:true,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    rol: {
        type: String,
        required:true,
        enum:["usuario","admin"],
        default: 'usuario',
    }
});

export const UserModel = mongoose.model(userCollection, userSchema);
