import express from "express";
import cors from "cors";
import { paymentRouter } from "./routes/payment.routes.js"

const PORT = 8080;
const app = express();

app.use(cors());


app.listen(PORT, ()=>{
    console.log(`Servidor funcionando desde el puerto: ${PORT}`);
})

app.use("/api/payments", paymentRouter)