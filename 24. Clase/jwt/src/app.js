import express  from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import viewRouter from "./routes/viewRoutes.js";
import userRouter from "./routes/usersRoutes.js";

const app = express();
const PORT = 8080;


app.use(express.json())

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname +'/views');
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'))


app.use('/', viewRouter)
app.use('/api', userRouter)

app.listen(PORT, ()=>{
    console.log('Funcionando en el puerto: ' + PORT)
})