import nodemailer from "nodemailer";
import { options } from "./options.js";

//Credenciales de la cuenta de GMAIL
const adminEmail = options.gmail.adminAccount;
const adminPass = options.gmail.adminPass;


//Configuracion del canal de comunicación entre node y gmail
const transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:587,
    auth:{
        user: adminEmail,
        pass: adminPass
    },
    secure: false,
    tls:{
        rejectUnauthorized: false
    }
})

export { transporter }