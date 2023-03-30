import http from 'http';

const PORT = 8080;


const server = http.createServer((request, response)=>{
    response.end('Mi primer hola mundo.')
})

server.listen(PORT, ()=>{
    console.log(`Servidor en el puerto ${ PORT }`)
} )
