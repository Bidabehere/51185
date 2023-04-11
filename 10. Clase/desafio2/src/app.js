import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import userRoutes from './routes/users.router.js';
import viewsRouter from './routes/views.router.js'
const PORT = 8080;

const app = express();

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/', viewsRouter);
app.use('/api/users', userRoutes);

app.listen(PORT, ()=>{
    console.log('Servidor funcionando en el puerto: ' + PORT)
})