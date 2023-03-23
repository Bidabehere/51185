const fs = require('fs');

fs.writeFileSync('./bd.txt', 'Guardo mi información.')

if(fs.existsSync('./bd.txt')){

    let contenido = fs.readFileSync('./bd.txt', 'utf-8');
    console.log(contenido)
    
    fs.appendFileSync('./bd.txt', ' -Mas contenido.')

    contenido = fs.readFileSync('./bd.txt', 'utf-8');

    console.log(contenido)
    
    fs.unlinkSync('./bd.txt')
}