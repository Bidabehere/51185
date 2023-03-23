const fs = require('fs')

const hora = new Date().toLocaleTimeString();
const fecha = new Date().toLocaleDateString();

fs.writeFile('./fyh.txt', `Fecha: ${fecha}, Hora: ${hora}`,(error)=>{

    if(error) return console.log(error);

        fs.readFile('./fyh.txt', 'utf-8', (error, info)=>{
            if(error) return console.log(error)
            console.log(info)
        })


})