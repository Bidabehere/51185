import express from "express";

const PORT = 8080;

const app = express();

app.listen(PORT, ()=>{
    //console.log(`Servidor funcionando en el puerto ${ PORT }`)
    console.log('Servidor funcionando en el puerto: ' + PORT)
})

app.get('/saludo', (req, res)=>{
    res.send('Hola desde express!')
})

app.get('/', (req, res)=>{
    res.send('Inicio')
})