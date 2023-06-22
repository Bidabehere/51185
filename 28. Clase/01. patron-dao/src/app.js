import express from "express";
import { contactRouter } from "./routes/contacts.router.js";
import { connectDB } from "./config/dbConnection.js"
import { options } from "./config/config.js";

const PORT = options.server.port;
const app = express()

app.use(express.json());

app.listen(PORT, ()=>{
    console.log('Servidor funcionando en el puerto: ' + PORT)
})

connectDB();

app.use("/api/contacts", contactRouter);