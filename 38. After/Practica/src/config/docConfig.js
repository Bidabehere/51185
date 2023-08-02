import { __dirname } from "../utils.js";
import swaggerJsDoc from "swagger-jsdoc";
import path from "path";

console.log(path.join(__dirname,"docs/"))
const swaggerOptions = {
    definition:{
        openapi:"3.0.1",
        info:{
            title: "Documentación backend tienda onLine",
            version:"1.0.1",
            description:"Definicion ded endpoints"
        }
    },
    apis:[`${path.join(__dirname,"docs/**/*.yaml")}`] //Los archivos de la docu
};

export const swaggerSpecs = swaggerJsDoc(swaggerOptions);