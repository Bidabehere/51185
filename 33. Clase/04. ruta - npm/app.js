import express from "express";
import {dividir, multiplicar, restar, sumar} from "coder51185";


const PORT = 8080;
const app = express();

app.listen(PORT, ()=>{
    console.log(`Servidor funcionando en el puerto ${PORT}`)
})

app.get("/suma", (req,res)=>{
    const {numero1, numero2} = req.query;
    const resultado = sumar(parseInt(numero1),parseInt(numero2));

    res.send({status:"success", message: "El resultado es: " + resultado});
})
app.get("/resta", (req,res)=>{
    const {numero1, numero2} = req.query;
    const resultado = restar(parseInt(numero1),parseInt(numero2));

    res.send({status:"success", message: "El resultado es: " + resultado});
})
app.get("/multiplicar", (req,res)=>{
    const {numero1, numero2} = req.query;
    const resultado = multiplicar(parseInt(numero1),parseInt(numero2));

    res.send({status:"success", message: "El resultado es: " + resultado});
})
app.get("/dividir", (req,res)=>{
    const {numero1, numero2} = req.query;
    const resultado = dividir(parseInt(numero1),parseInt(numero2));

    res.send({status:"success", message: "El resultado es: " + resultado});
})