import express from 'express';
import session from 'express-session';
import MongoStore from 'connect-mongo';

const DB = 'eshop';  
const MONGO = 'mongodb+srv://bidabehere:bidabehere@cluster0.a5dcy.mongodb.net/' + DB;
const PORT = 8080;

const app = express();

app.use(session({
    store: new MongoStore({
        mongoUrl: MONGO
    }),
    secret: "CoderSecret",
    resave:false,
    saveUninitialized:false
}))

app.get('/', (req,res)=>{
    req.session.user = 'Active Session';
    res.send('Session Set');
});

app.get('/test', (req,res)=>{
    res.send(req.session.user);
})

const server = app.listen(PORT, ()=>{
    console.log('Servidor funcionando en el puerto: ' + PORT);
})