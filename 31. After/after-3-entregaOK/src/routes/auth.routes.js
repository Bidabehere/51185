import {Router} from "express";
import passport from "passport";

const router = Router();

router.post("/signup", passport.authenticate("signupStrategy",{
    failureRedirect:"/api/sessions/failure-signup"
}), (req,res)=>{
    res.send("registro exitoso")
});

router.get("/failure-signup", (req,res)=>{
    res.send(`<div>Error al registrar al usuario, <a href="/signup">Intente de nuevo</a></div>`);
});

router.post("/login", passport.authenticate("loginStrategy",{
    failureRedirect:"/api/sessions/failure-login"
}), (req,res)=>{
    res.send("login exitoso")
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

router.get("/profile", (req,res)=>{
    res.send(req.user);
});

export { router as authRouter};