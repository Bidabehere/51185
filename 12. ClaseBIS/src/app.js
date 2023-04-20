import express from "express";
import __dirname from "./utils.js";
import handlebars from "express-handlebars";
import viewRouter from "./routes/views.router.js";
import { Server, Socket } from "socket.io";

const PORT = process.env.PORT || 8080;
const app = express();
const server = app.listen(PORT, ()=>{
    console.log('Servidor funcionando en el puerto: ' + PORT);
})

//Vistas
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

//Servicio
app.use(express.json());
app.use(express.static(__dirname + '/public'))

//Rutas
//Vistas
app.use('/', viewRouter)

//Chat socket.io

const io = new Server(server);
const messages = [];
const dataManager = new DataManager();
io.on('connection', Socket =>{

    console.log('Socket connected');

    Socket.on('message', data=>{
        messages.push(data);
        io.emit('messageLogs', messages)
    })
    Socket.on('authenticated', data =>{
        
        Socket.broadcast.emit('newUserConnected', data)

     })

})








