import express from 'express';
import session from 'express-session';
import mongoose from 'mongoose';
import MongoStore from 'connect-mongo';
import handlebars from 'express-handlebars';
import passport from 'passport';

import __dirname from './utils.js';
import viewRouter from './routes/views.router.js';
import sessionRouter from './routes/sessions.router.js';
import initializePassport from './config/passport.config.js';

const DB = 'eshop';  
const MONGO = 'mongodb+srv://bidabehere:bidabehere@cluster0.a5dcy.mongodb.net/' + DB;
const PORT = 8080;

const app = express();

const connection = mongoose.connect(MONGO);

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));

app.use(session({
    store: new MongoStore({
        mongoUrl: MONGO,
        ttl:3600
    }),
    secret:'CoderSecret',
    resave:false,
    saveUninitialized:false
}))
initializePassport();
app.use(passport.initialize());
app.use(passport.session());


app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

app.use('/', viewRouter);
app.use('/api/session', sessionRouter);

const server = app.listen(PORT, ()=>{
    console.log('Servicion funcionando en el puerto: ' + PORT);
})