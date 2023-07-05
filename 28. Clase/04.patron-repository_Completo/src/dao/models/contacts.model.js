import mongoose from "mongoose";

const contactsCollection = "contacts";

const contactsSchema = new mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    apellido:{
        type:String,
        required:true
    },
    nombreCompleto:{
        type:String,
        default:''
    },
    telefono:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});

export const contactsModel = mongoose.model(contactsCollection,contactsSchema);