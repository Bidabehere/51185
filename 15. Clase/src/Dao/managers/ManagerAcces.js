import fs from 'fs';
import __dirname from '../../utils.js';


export default class ManagerAcces{

    async crearRegistro(metodo){

        const fecha = new Date().toLocaleDateString();
        const hora = new Date().toLocaleTimeString();
        const message = `Fecha: ${fecha} - Hora: ${hora} - Metodo: ${metodo}`
        console.log(message);
        await fs.promises.appendFile( __dirname +'/Dao/managers/log.txt',`Fecha: ${fecha} - Hora: ${hora} - Metodo: ${metodo}\n`,(err)=>{
            console.log(err);
            return err;
        })

    }

}