import mongoose from "mongoose";

try {
  await mongoose.connect("mongodb+srv://bidabehere:bidabehere@cluster0.a5dcy.mongodb.net/Coder51185");
  console.log("mongodb+srv://bidabehere:bidabehere@cluster0.a5dcy.mongodb.net/Coder51185");
} catch (error) {
    console.log(`Hubo un error conectandose a la base ${error}`);
}