const fs = require('fs');


const operacionArchivo = async () =>{

    await fs.promises.writeFile('./bdPromesa.txt', 'Guardo mi info.') //1

    let contenido = await fs.promises.readFile('./bdPromesa.txt', 'utf-8')

    console.log(contenido)

    await fs.promises.appendFile('./bdPromesa.txt', ' Mas info.')

    contenido = await fs.promises.readFile('./bdPromesa.txt', 'utf-8')

    console.log(contenido)

    //await fs.promises.unlink('./bdPromesa.txt')

}
operacionArchivo()