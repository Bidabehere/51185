const fs = require('fs')

fs.writeFile('./bd.txt', 'Hola desde el callback.', (error)=>{
    //validar el error
    if(error) return console.log('Error al escribir el archivo.')
    //leo el archivo
        fs.readFile('./bd.txt','utf-8', (error, contenido)=>{
            if(error) return console.log('Error al leer el archivo');
                console.log(contenido);//'Hola desde el callback.'
                    fs.appendFile('./bd.txt', ' -Otro contenido.', (error)=>{
                        if(error) return console.log('Error al actualizar el archivo.')
                            fs.readFile('./bd.txt','utf-8', (error, contenido)=>{
                                if(error) return console.log('Error al leer el archivo.')
                                console.log(contenido) //Hola desde el callback. -Otro contenido.
                                   fs.unlink('./bd.txt', (error)=>{
                                        if(error) return console.log(error)
                                   })    

                            })
                    })
        } )
})