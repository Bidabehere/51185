import express from "express";
import compression from "express-compression";


const PORT = 8081;
const app = express();

app.listen(PORT, ()=>{
    console.log(`Servidor funcionando en el puerto ${PORT}`)
})

app.get("/endpoint-normal", (req,res)=>{
    let string = "Hola Coders, soy una string muy larga"
    for (let i = 0; i < 5e4; i++) {
        string+= " - Continuo siendo muy larga"
    }
    string+=" -> Soy el final del String";
    res.send(string);
})

app.get("/endpoint-gzip",compression(),(req,res)=>{
    let string = "Hola Coders, soy una string muy larga"
    for (let i = 0; i < 5e4; i++) {
        string+= " - Continuo siendo muy larga"
    }
    string+=" -> Soy el final del String";
    res.send(string);
})

app.get("/endpoint-brotli",compression({brotli:{enable:true,zlib:{}}}),(req,res)=>{
    let string = "Hola Coders, soy una string muy larga"
    for (let i = 0; i < 5e4; i++) {
        string+= " - Continuo siendo muy larga"
    }
    string+=" -> Soy el final del String";
    res.send(string);
})