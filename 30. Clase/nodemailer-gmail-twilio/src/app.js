import express from "express";
import { transporter } from "./config/gmail.js";
import { options } from "./config/options.js";
import path from "path";
import { __dirname } from "./utils.js";
import { twilioClient, twilioPhone } from "./config/twilio.js";

const PORT = options.server.port || 8080;

const app = express();

app.listen(PORT, ()=>{
    console.log("Servidor funccionando en el puerto: " + PORT)
})

const emailTemplate = `<div>
<h1>Bienvenido!!</h1>
<img src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/portals_3/2x1_SuperMarioHub.jpg" style="width:250px"/>
<p>Ya puedes empezar a usar nuestros servicios</p>
<img width="100px" src="cid:perrito"/>
<a href="https://www.google.com/">Explorar</a>
</div>`;

app.post("/registro", async (req,res)=>{
    try {
        const contenido = await transporter.sendMail({
            from:"Ecommerce tienda La Nueva",
            to:"bidabehere@gmail.com",
            subject:"Registro exitoso",
            html: emailTemplate,
            attachments: [
                {
                    filename:"descarga.jpg",
                    path: path.join(__dirname,"/images/descarga.jpg"),
                    cid:"perrito"
                },
                { 
                    filename:"factura.pdf",
                    path: path.join(__dirname,"/images/factura.pdf")
                }
            ]
        })
        console.log("contenido", contenido);
        res.json({status:"sucess", message: "Registo y envio de correo."})
    } catch (error) {
        console.log(error.message);
        res.json({status:"error", message: "Hubo un error al registrar al usuario."})
    }   
})

app.post("/compra", async (req, res)=>{
    try {
        
        const {nombre, producto} = req.query;

        //creamos el mensaje
        const message = await twilioClient.messages.create({
            body: `Gracias ${nombre}, su producto ${producto} esta en camino.`,
            from: twilioPhone,
            to: "+54 3329 529116"
        })
        console.log("Message:", message);
        res.json({sattus:"success", message:"Compra en camino"})

    } catch (error) {
        console.log(error.message);
        res.json({status:"error", message: "Hubo un error al realizar la compra."})

    }
})