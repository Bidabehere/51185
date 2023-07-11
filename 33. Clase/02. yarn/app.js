import express from "express";

const port = 8080;
const app = express();

app.listen(port,()=>console.log(`Server listening on port ${port}`))

app.get("/",(req,res)=>{
    res.send("bienvenido al curso de nodejs");
});