import { Command } from "commander";

const program = new Command();

program
.option("-d", "Variable de debug",false)
.option("-p <port>","Puerto de la aplicación",8080)
.option("-l <languaje>","Idioma de la aplicacion","es")
.requiredOption("-u <user>", "Usuario ded la aplicacion", "No se recibio un usuario")

program.parse();

console.log("args",program.opts()); 