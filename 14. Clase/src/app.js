import express from 'express';
import estudianteRouter from './routes/estudiante.route.js';
import mongoose from 'mongoose';

const PORT = 8080;
const MONGO = 'URL MONGO';


const app = express();
const conection = mongoose.connect(MONGO);

app.use(express.json());
app.use('/estudiantes', estudianteRouter);


const server = app.listen(PORT, ()=>{
    console.log(`Servidor funcionando en el puerto: ${PORT}`);
})