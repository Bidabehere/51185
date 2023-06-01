import express from 'express';
import petsRouter from './routes/pets.router.js';


const PORT = 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.listen(PORT, ()=>{
    console.log('Servidor funcionando en el puerto: ' + PORT)
})

app.use('/api/pets', petsRouter);