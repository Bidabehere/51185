import express from "express";
import { usersRouter } from "./routes/user.routes.js";
import { errorHandler } from "./middlewares/errorHandler.js";
//
//

const PORT = 8080;
const app = express();

//midlewares
app.use(express.json());

app.listen(PORT, ()=>{
   console.log(`Servidor funcionando en el puerto: ${PORT}`)
})

app.use("/api/users", usersRouter);
app.use(errorHandler);