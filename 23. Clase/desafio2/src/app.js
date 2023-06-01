import express from 'express';
import UserRouter from './routes/users.router.js';

const PORT = 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.listen(PORT, ()=>{
    console.log('Servidor funcionando en el puerto: ' + PORT)
})

const userRouter = new UserRouter()
app.use('/api/user', userRouter.getRouter());