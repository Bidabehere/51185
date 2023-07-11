import express from "express";
//const express = require('express')



const PORT = 8080;
const app = express();

app.listen(PORT, ()=>{
    console.log(`Servidor funcionando en el puerto ${PORT}`)
})

app.get("/", (req,res)=>{
    let string = "Hola Coders!"
    res.send(string);
})