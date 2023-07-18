import express from "express";
import { addLogger } from "./utils/logger.js";

const port =8080;
const app =express();

app.listen(port,()=>console.log(`Server ok`));

app.use(addLogger);

app.get("/",(req,res)=>{
    res.send("bienvenido");
});

app.get("/niveles", (req,res)=>{
    req.logger.silly("nivel silly");
    req.logger.verbose("nivel verbose");
    req.logger.debug("nivel debug");
    req.logger.http("nivel http");
    req.logger.info("nivel info");
    req.logger.warn("nivel warn");
    req.logger.error("nivel error");
    req.logger.fatal("nivel fatal");
    res.send("prueba niveles")
});