import ManagerUsuarios from "./manager/managerUsuarios.js";

const manager = new ManagerUsuarios();

const env = async () =>{

    let user = {
        nombre: "Juan Pablo",
        apellido: "Bidabehere",
        edad: "42",
        curso: "Backend"
    }

    let result = await manager.crearUsuario(user);
    console.log(result)
    let usuarios = await manager.consultarUsuarios()
    console.log(usuarios)

} 

env()