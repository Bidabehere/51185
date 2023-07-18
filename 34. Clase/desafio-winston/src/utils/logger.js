import winston from "winston";
import * as dotenv from "dotenv";
import { __dirname } from "../utils.js";
import path from "path";
dotenv.config();

const customLevels = {
    levels:{
        fatal:0,
        error:1,
        warn:2,
        info:3,
        http:4,
        verbose:5,
        debug:6,
        silly:7
    },
    colors:{
        fatal:"red",
        error:"orange",
        warn:"yellow",
        info:"blue",
        http:"green",
        verbose:"white",
        debug:"purple",
        silly:"gray"
    }
}

const devLogger = winston.createLogger({
    levels:customLevels.levels,
    transports:[
        new winston.transports.Console({level:"verbose"})
    ]
});

const prodLogger = winston.createLogger({
    transports:[
        //definir los diferentes sistemas de almacenamiento de logs(mensajes/registros)
        new winston.transports.Console({ level: "http"}),
        new winston.transports.File({filename: path.join(__dirname,"/logs/errores.log"), level:"warn" })
    ]
});

const currentEnv = process.env.NODE_ENV || "development";

//crear un middleware para agregar el logger al objeto req
export const addLogger = (req,res,next)=>{
    if(currentEnv === "development"){
        req.logger = devLogger;
    } else {
        req.logger = prodLogger;
    }
    req.logger.http(`${req.url} - method: ${req.method}`);
    next();
}


// const addLogger2 = ()=>{
//     let currentLogger;
//     if(currentEnv === "development"){
//         currentLogger=devLogger;
//     } else {
//         currentLogger=prodLogger;
//     }
//     return currentLogger;
// }
// export {addLogger2};

// //archivo user.service.js
// import {addLogger2} from "";
// const logger = addLogger();
// logger.info("mensaje informativo");