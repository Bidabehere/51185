//const fs = require('fs')
import fs from 'fs';
import { Blob } from 'buffer';

const environment = async () => {

    try {
        
        const data = await fs.promises.readFile('./package.json', 'utf-8')

        const contenido = data;
        const contenidoObj = JSON.parse(data);
        const size = new Blob([data]).size;

        const info = {
            contenido,
            contenidoObj,
            size
        }
        console.log(info)

        await fs.promises.writeFile('./info.json', JSON.stringify(info,null,'\t'))

    } catch (error) {
        console.log(error)
    }


}

environment()
