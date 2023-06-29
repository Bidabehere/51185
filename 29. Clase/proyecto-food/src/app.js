import express from "express";
import { options } from "./config/options.js";
import cors from "cors";

import { userRouter } from "./routes/users.routes.js";
import { businessRouter } from "./routes/business.routes.js";
import { orderRouter } from "./routes/orders.routes.js";

const PORT = options.server.port || 8080;
const app = express();

app.use(express.json());
//app.use(cors())//todo libre
app.use(cors({
    origin: "http://localhost:5500"
}))//individual o restrictivo

app.listen(PORT, ()=>{
    console.log('Servidor funcionando en el puerto: ' + PORT)
})

app.use("/api/users", userRouter)
app.use("/api/business", businessRouter)
app.use("/api/orders", orderRouter)