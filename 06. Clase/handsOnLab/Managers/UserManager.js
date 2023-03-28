import fs from 'fs';
import crypto, { createHmac } from 'crypto';

const path = './files/Users.json';

export default class NuestraClase {
    getUsuarios = async() =>{
        if(fs.existsSync(path)){
            const data = await fs.promises.readFile(path, 'utf-8');
            const users = JSON.parse(data);
            return users;
        }else {
            return [];
        }
    }
    crearUsuario = async (usuario) =>{
        
        const usuarios = await this.getUsuarios();
        usuario.salt = crypto.randomBytes(128).toString('base64');
        usuario.contrasena = crypto.createHmac('sha256',usuario.salt).update(usuario.contrasena).digest('hex');
        usuarios.push(usuario);
        await fs.promises.writeFile(path, JSON.stringify(usuarios,null,'\t'))
        return usuario;
    }

    validarUsuario = async (username, password) => {
        
        const usuarios = await this.getUsuarios();

        const usuarioIndex = usuarios.findIndex( user => {
           return  user.usuario === username
        })
        if(usuarioIndex === -1){
            console.log('El usuario no existe')
            return;
        }
        const usuario = usuarios[usuarioIndex];

        const passwordHash = crypto.createHmac('sha256',usuario.salt).update(password).digest('hex');
        //console.log(passwordHash)
        if(passwordHash === usuario.contrasena){
            console.log('Logueado');
        }else{
            console.log('Contraseña invalida.')
        }

    }



}