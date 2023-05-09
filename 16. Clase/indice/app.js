import mongoose from "mongoose";
import userModel from "./models/users.js";
import data from "./Users.js";

const MONGO = 'mongodb+srv://bidabehere:bidabehere@cluster0.a5dcy.mongodb.net/Coder51185';


const enviroment = async () =>{

    await mongoose.connect(MONGO);
   // const result = await userModel.insertMany(data);
   // console.log(result);

   const response = await userModel.find({first_name:"Celia"}).explain('executionStats');
console.log(response);

}
console.log(1);
enviroment()
console.log(2);