import mongoose from "mongoose";
import studentModel from "./models/student.js";
import courseModel from "./models/courses.js";

const MONGO = 'mongodb+srv://bidabehere:bidabehere@cluster0.a5dcy.mongodb.net/Coder511852';


const enviroment = async () =>{

    await mongoose.connect(MONGO);

/*    const result = await studentModel.create({
        first_name: "Hilda",
        last_name: "Coruño",
        email: "correoHilda@correo.com",
        gender: "Female"
    }) */

/*     const result = await courseModel.create({
        title:"Curso de Backend",
        description: "Desarrollo de servidores bonitos",
        difficulty: 5,
        topycs:["JavaScript", "Servidores", "Motores de Plantilla"],
        professor: "Juan Pablo Bidabehere"
    }) */

    //const student = await studentModel.find({_id: "645997779034b99572ff64ac"});
    //student[0].courses.push({course:"645998433d02c6362b9ffc27"});
    //const result = await studentModel.updateOne({_id:"645997779034b99572ff64ac"},{$set:student[0]});
    //console.log(result);

    const student = await studentModel.find({_id: "645997779034b99572ff64ac"});//.populate('courses.course');
    
    console.log(JSON.stringify(student, null, "\t"));

}

enviroment();