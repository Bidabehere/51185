import fs from 'fs';

const path = './src/files/BD.json';

export default class DataManager{

    getUsuarios = async() =>{

        if(fs.existsSync(path)){
            const data = await fs.promises.readFile(path, 'utf-8');
            const users = JSON.parse(data);
            return users;
        }else {
            return [];
        }
    }
    getUsuario = async(id) =>{
        const usuarios = await this.getUsuarios();
        
        const usuario = usuarios.filter((usuario)=>{
            return usuario.id == id
        })

        return usuario

    }
    eliminarUsuario = async(id) =>{
        
        const usuarios = await this.getUsuarios();
        const usuarioIndex = usuarios.findIndex((usuario)=>{
            return usuario.id == id
        })
        usuarios.splice(usuarioIndex,1)

        try {
            await fs.promises.writeFile(path, JSON.stringify(usuarios,null,'\t'))
            return 'Usuario eliminado'
        } catch (error) {
             return error   
        }

        
    }
    crearUsuario = async(usuario) =>{
        const usuarios = await this.getUsuarios();

        //console.log(usuarios[usuarios.length-1]);
        let id = usuarios[usuarios.length-1].id ;


        usuario.id = ++id;
        usuarios.push(usuario)

        try {
            await fs.promises.writeFile(path, JSON.stringify(usuarios,null,'\t'))
            return 'Usuario creado'
        } catch (error) {
             return error   
        }


    }
    
    modificarUsuario = async(id, nombre,apellido,sueldo,categoria)=>{

        const usuarios = await this.getUsuarios();

        const usuarioIndex = usuarios.findIndex((usuario)=>{
            return usuario.id == id
        })

        usuarios[usuarioIndex].nombre = nombre;
        usuarios[usuarioIndex].apellido = apellido;
        usuarios[usuarioIndex].sueldo = sueldo;
        usuarios[usuarioIndex].categoria = categoria;

        try {
            await fs.promises.writeFile(path, JSON.stringify(usuarios,null,'\t'))
            return 'Usuario modificado'
        } catch (error) {
             return error   
        }

    }



}