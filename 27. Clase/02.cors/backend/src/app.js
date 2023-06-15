import express from "express";
import cors from "cors";


const PORT = 8080;
const app = express();

app.use(express.json());

app.use(cors({
  origin:"http://127.0.0.1:5501", //Un origen particular
}))

//app.use(cors()) Cualquier origen
  

app.listen(PORT, ()=>{
    console.log('Servidor en el puerto: ' + PORT)
})

const users = [
    {
        name: "Pepe",
        email: "pepe@mail.com"
    }
];

app.get('/api/user', (req,res)=>{
    res.send({users});
})
app.post('/api/user', (req,res)=>{
    
    const newUser = req.body;
    users.push(newUser);

    res.send({status:"success", message:"Usuario agregado"})
})