import mongoose from "mongoose";

const collection = "contacts";

const schema = new mongoose.Schema({

    nombre:{
        type: String,
        require: true
    },
    telefono:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    }

})

export const contactsModel = mongoose.model(collection, schema)