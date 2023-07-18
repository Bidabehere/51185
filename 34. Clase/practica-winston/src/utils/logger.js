import winston from "winston";
import { __dirname } from "../utils.js";
import path from "path";

const logger = winston.createLogger({
    transports:[
        //definir los diferentes sistemas de almacenamiento de logs(mensajes/registros)
        new winston.transports.Console({ level: "silly"}),
        new winston.transports.File({filename: path.join(__dirname,"/logs/registros.log"), level:"warn" })
    ]
});

//crear un middleware para agregar el logger al objeto req
export const addLogger = (req,res,next)=>{
    req.logger = logger;
    req.logger.http(`${req.url} - method: ${req.method}`);
    next();
}