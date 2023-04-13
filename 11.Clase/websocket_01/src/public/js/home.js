const socket = io();

/* socket.on('log', data=>{
    console.log(data);
})

socket.emit('message', 'Nuevo ingreso'); */


const input = document.getElementById('textbox');
const log = document.getElementById('log');

/* input.addEventListener('keyup', evt =>{
    let {key} = evt;
    evt.target.value = '';
    socket.emit('message1', key)
})
socket.on('log',data=>{
    log.innerHTML += data;
}) */

input.addEventListener('keyup', evt =>{
    if(evt.key === 'Enter'){
        socket.emit('message2',input.value)
        input.value = '';
    }
})

socket.on('log',data=>{

    let logs = '';

    data.logs.forEach(log => {
    logs +=   `${ log.socketid } dice: ${ log.mesage} <br/>`      
    });
    log.innerHTML = logs;    
})