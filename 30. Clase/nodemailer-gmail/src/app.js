import express from "express";
import { transporter } from "./config/gmail.js";
import { options } from "./config/options.js";

const PORT = options.server.port || 8080;

const app = express();

app.listen(PORT, ()=>{
    console.log("Servidor funccionando en el puerto: " + PORT)
})

const emailTemplate = `<div>
<h1>Bienvenido!!</h1>
<img src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/portals_3/2x1_SuperMarioHub.jpg" style="width:250px"/>
<p>Ya puedes empezar a usar nuestros servicios</p>
<a href="https://www.google.com/">Explorar</a>
</div>`;

app.post("/registro", async (req,res)=>{
    try {
        const contenido = await transporter.sendMail({
            from:"Ecommerce tienda La Nueva",
            to:"bidabehere@gmail.com",
            subject:"Registro exitoso",
            html: emailTemplate
        })
        console.log("contenido", contenido);
        res.json({status:"sucess", message: "Registo y envio de correo."})
    } catch (error) {
        console.log(error.message);
        res.json({status:"error", message: "Hubo un error al registrar al usuario."})
    }   
})