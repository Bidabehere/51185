import express from "express";
import { userRouter } from "./routes/user.Routes.js";

const PORT = 8080;
const app = express();

app.listen(PORT, ()=>{
    console.log(`Servidor funcionando en el puerto: ${PORT}`)
})

//routes
app.use("/api/users", userRouter);
