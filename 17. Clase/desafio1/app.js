import mongoose from "mongoose";
import studentsModel from "./models/students.js";

const MONGO = 'mongodb+srv://bidabehere:bidabehere@cluster0.a5dcy.mongodb.net/Coder51185'

const exercise = async () =>{

    const connection = mongoose.connect(MONGO);

    /* const insertStudents = async() =>{
        const result = await studentsModel.insertMany(students)
        console.log(result);
    } */
    //insertStudents();
    //Agrupar por calificacion de mayor a menor
/*     const result = await studentsModel.aggregate([
        {$group: {_id:'$grade', students: {$push: "$$ROOT"}}},
        {$sort:{ _id:-1 }}
    ])
    console.log( JSON.stringify(result,null,'\t')); 
    */

    //Agrupar estudiantes por grupo
/*     const result = await studentsModel.aggregate([
        {$group: { _id: "$group", students: {$push: "$$ROOT"} }}
    ])

    console.log( JSON.stringify(result,null,'\t')); 
    */
    //Promedio de estudiantes 1A
/*     const result = await studentsModel.aggregate([
        {$match: {group: "1B"}},
        {$group: {_id: "1B", promedio: {$avg: "$grade"}}}
    ])
    console.log( JSON.stringify(result,null,'\t'));  */


    //Promedio general de estudiantes
/*     const result = await studentsModel.aggregate([
        {$group: {_id: "Students", promedio: {$avg: "$grade"}}}
    ]) */

    //Promedio Hombres
/*     const result = await studentsModel.aggregate([
        {$match: {gender: "Male"}},
        {$group: {_id: "Hombres", promedio: {$avg: "$grade"}}}
    ]) */


    //Promedio Mujeres
    const result = await studentsModel.aggregate([
        {$match: {gender: "Female"}},
        {$group: {_id: "Mujeres", promedio: {$avg: "$grade"}}}
    ])


    console.log( JSON.stringify(result,null,'\t')); 



}

exercise();