import mongoose from 'mongoose';

const collection = 'Estudiantes';

const schema = new mongoose.Schema({
    nombre:{
        type:String,
        require:true
    },
    apellido:{
        type: String,
        require: true
    },
    edad:{
        type:Number,
        require:true
    },
    dni:{
        type:String,
        require:true,
        unique:true
    },
    curso:{
        type:String,
        require:true
    },
    nota:{
        type:Number,
        require:true
    }
})

const estudianteModel = mongoose.model(collection, schema);

export default estudianteModel;