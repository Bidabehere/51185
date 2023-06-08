import express from 'express';
import { fork } from 'child_process';
import { operacionCompleja } from './process/childProcess.js';
import __dirname from './utils.js';
import path from 'path';

const app = express();
const PORT = 8080;

app.listen(PORT, ()=>{
    console.log('Servidor funcionando en el puerto: ' + PORT)
})

app.get('/suma-bloqueante', (req,res)=>{
    const resultado = operacionCompleja();
    res.send({resultado});
})
app.get('/suma-nobloqueante', (req,res)=>{
    const child = fork(path.join(__dirname,"/process/childProcess.js"));
    child.send("start");
    child.on("message", (result)=>{
        res.send(`El resultado de la suma es ${result}`)
    })
})
let visitas = 0;
app.get('/', (req,res)=>{
    visitas++;
    res.send(`Bienvenido visitante: ${visitas}`)
})

