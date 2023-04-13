import express from 'express';
import handlebars from 'express-handlebars';
import { Server } from 'socket.io';

import __dirname from './utils.js';
import viewRouter from './routes/views.routes.js';

const PORT = 8080;

const app = express();

app.use(express.static(__dirname+'/public'));

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname+'/views');
app.set('view engine', 'handlebars');

app.use('/',viewRouter);

const server = app.listen(PORT, ()=>{
    console.log('Servidor funcionando en el puerto: ' + PORT);
})


const socketServerIO = new Server(server);


const logs = [];

socketServerIO.on('connection',  socket =>{
    console.log('Usuario conectado');

/*     socket.on("message1", data =>{
        socketServerIO.emit('log', data);
    }) */

    socket.on("message2", data =>{
        logs.push({socketid: socket.id, mesage: data})
        socketServerIO.emit('log', {logs})
    })

})