import { ConnectionDB } from "./connectionDB.js";


const primeraInstancia = ConnectionDB.getInstance();
const segundaInstancia = ConnectionDB.getInstance();
const tercerInstancia = ConnectionDB.getInstance();