import __dirname from "../utils/index.js";
import swaggerJsDoc from "swagger-jsdoc";
import path from "path";


const swaggerOptions = {
        definition:{
            openapi:"3.0.1",
            info:{
                title:"Documentacion api de mascotas",
                version:"1.0.0",
                description:"Definicion de endpoints para la api de mascotas"
            }
        },
        apis:[`${path.join(__dirname,"../docs/**/*.yaml")}`] //Los archivos de configuracion
};

//crear una variable que interprete las opciones 
export const swaggerSpecs = swaggerJsDoc(swaggerOptions);
