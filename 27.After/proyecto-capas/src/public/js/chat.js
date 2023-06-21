const socketClient = io(); //instancia del socket del lado del cliente

const chatbox = document.getElementById('chatbox');
const emailBox = document.getElementById('emailBox');
const sendBtn = document.getElementById('sendButton');

const sendMessage = ()=>{
    socketClient.emit('message', {user:emailBox.value, message:chatbox.value});
    chatbox.value='';
};

chatbox.addEventListener('keydown',(e)=>{
    if(e.key === 'Enter'){
        sendMessage();
    }
});


sendBtn.addEventListener('click',(e)=>{
    sendMessage();
});


const divMessages = document.getElementById("historial");
//recibimos los mensajes del server.
socketClient.on("msgHistory",(data)=>{
    // console.log("data", data);
    //vaciamos el contenido de div
    divMessages.innerHTML='';
    data.forEach(element => {
        //creamos un párrafo con para mensaje
        const parrafo = document.createElement('p');
        //le agregamos el mensaje al párrafo
        parrafo.innerHTML=`${element.user} - message: ${element.message}`;
        //vamos agregando al div cada párrafo que creamos
        divMessages.appendChild(parrafo);
    });
});
