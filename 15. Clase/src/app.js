import express from 'express';
import mongoose from 'mongoose';

import __dirname from './utils.js';
import userRouter from './routes/users.router.js';
import courseRouter from './routes/courses.router.js';

const PORT = 8080;
const MONGO = 'mongodb+srv://bidabehere:bidabehere@cluster0.a5dcy.mongodb.net/?retryWrites=true&w=majority';

const app = express();

const connection = mongoose.connect(MONGO);
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/api/users', userRouter);
app.use('/api/courses', courseRouter);

app.listen(PORT, ()=>{
    console.log('Servidor funcionando en el puerto: ' + PORT);
})

