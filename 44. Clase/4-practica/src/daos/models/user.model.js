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
        enum:["user","admin","premium"],
        default: 'user',
    },
    documents:{
        type:[
            {
                name:{type:String,required:true},
                reference:{type:String,required:true}
            }
        ],
        default:[]
    },
    last_connection:{
        type:Date,
        default: null
    },
    status:{
        type:String,
        require:true,
        enums:["completo","incompleto","pendiente"],
        default:"pendiente"
    },
    avatar:{
        type:String,
        default:""
    }
});

export const UserModel = mongoose.model(userCollection, userSchema);
