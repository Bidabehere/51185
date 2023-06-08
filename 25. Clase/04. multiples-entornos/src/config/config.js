import dotenv from "dotenv"
import  __dirname  from '../utils.js';
import path from 'path';
import { Command } from 'commander';

const program = new Command();

program
.option("-mode <modo>", "modo de inicio", "dev")
program.parse();

const enviroment = program.opts();

console.log(enviroment);

const pathEnviroment = enviroment.Mode === "prod" ? path.join(__dirname, "../.env.production") : path.join(__dirname, "../.env.development")

dotenv.config({path: pathEnviroment});

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
const CORREO_ADMIN = process.env.CORREO_ADMIN;
const PASSWORD_ADMIN = process.env.PASSWORD_ADMIN;

export const config = {
    server: {
        port: PORT
    },
    mongo: {
        url: MONGO_URL
    },
    auth: {
        account: CORREO_ADMIN,
        pass: PASSWORD_ADMIN
    }
}
