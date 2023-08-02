import nodemailer from "nodemailer";
import {options} from "../config/options.js";

//creamos el transporter
const transporter = nodemailer.createTransport({
    service:"gmail",
    port:587,
    auth:{
        user:options.gmail.emailAdmin,
        pass:options.gmail.emailToken
    },
    secure:false,
    tls:{
        rejectUnauthorized:false
    }
});

//funcion para generar el correo de recuperacion de constraseña
export const sendRecoveryPass = async(userEmail,token)=>{
    const link = `http://localhost:8080/reset-password?token=${token}`;//enlace con el token

    //estructura del correo
    await transporter.sendMail({
        from:options.gmail.emailAdmin,
        to:userEmail,
        subject:"restablecer contraseña",
        html:`
            <div>
                <h2>Has solicitado un cambio de contraseña</h2>
                <p>Da clic en el siguiente enlace para restablecer la contraseña</p>
                <a href="${link}">
                    <button> Restablecer contraseña </button>
                </a>
            </div>
        `
    })
};