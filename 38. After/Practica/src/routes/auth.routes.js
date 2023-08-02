import {Router} from "express";
import passport from "passport";
import { sendRecoveryPass } from "../utils/email.js";
import { generateEmailToken, verifyEmailToken, isValidPassword, createHash } from "../utils.js";
import { UserModel } from "../daos/models/user.model.js";

const router = Router();

router.post("/signup", passport.authenticate("signupStrategy",{
    failureRedirect:"/api/sessions/failure-signup"
}), (req,res)=>{
    // res.send("registro exitoso")
    res.redirect("/login");
});

router.get("/failure-signup", (req,res)=>{
    res.send(`<div>Error al registrar al usuario, <a href="/signup">Intente de nuevo</a></div>`);
});

router.post("/login", passport.authenticate("loginStrategy",{
    failureRedirect:"/api/sessions/failure-login"
}), (req,res)=>{
    res.send("login exitoso")
    // res.redirect("/perfil");
});

router.get("/failure-login", (req,res)=>{
    res.send(`<div>Error al loguear al usuario, <a href="/login">Intente de nuevo</a></div>`);
});

router.post("/logout",(req,res)=>{
    req.session.destroy((err)=>{
        if(err) return res.json({status:"error", message:"no se pudo cerrar la sesión"});
        res.json({status:"success", message:"sesion finalizada"});
    });
});

router.post("/forgot-password",async(req,res)=>{
    try {
        const {email} = req.body;
        //verificamos que el usuario exista
        const user = await UserModel.findOne({email:email});
        if(!user){
            return res.send(`<div>Error, <a href="/forgot-password">Intente de nuevo</a></div>`);
        }
        //si el usuario existe, generamos el token del enlace
        const token = generateEmailToken(email,3*60);
        await sendRecoveryPass(email,token);
        res.send("se envio un correo a su cuenta para restablecer la contraseña, regresar <a href='/login'>al login</a>");
    } catch (error) {
        res.send(`<div>Error, <a href="/forgot-password">Intente de nuevo</a></div>`)
    }
});

router.post("/reset-password",async(req,res)=>{
    try {
        const token = req.query.token;
        const {email, newPassword} = req.body;
        //validamos el token
        const validEmail = verifyEmailToken(token);
        if(!validEmail){
            return res.send(`El enlace ya no es valido, genere un nuevo enlace para recuperar la contraseña <a href="/forgot-password" >Recuperar contraseña</a>`)
        }
        const user = await UserModel.findOne({email:email});
        if(!user){
            return res.send("El usuario noe sta registrado")
        }
        if(isValidPassword(newPassword,user)){
            return res.send("No puedes usar la misma contraseña");
        }
        const userData = {
            ...user._doc,
            password:createHash(newPassword)
        }
        console.log("userData",userData)
        const userUpdate = await UserModel.findOneAndUpdate({email:email},userData);
        res.render("login",{message:"contraseña actualizada"});
    } catch (error) {
        res.send(error.message);
    }
});

export { router as authRouter};