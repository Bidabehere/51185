import passport from "passport";

export const passportSignupController = passport.authenticate("signupStrategy",{
    failureRedirect:"/api/sessions/failure-signup"
});

export const productsRedirectController = (req,res)=>{
    res.redirect("/products");
};

export const passportFailSignup = (req,res)=>{
    res.send(`<div>Error al registrar al usuario, <a href="/signup">Intente de nuevo</a></div>`);
}

export const passportLoginController = passport.authenticate("loginStrategy",{
    failureRedirect:"/api/sessions/failure-login"
});

export const passportFailLogin = (req,res)=>{
    res.send(`<div>Error al loguear al usuario, <a href="/login">Intente de nuevo</a></div>`);
};

export const logoutController = (req,res)=>{
    req.session.destroy((err)=>{
        if(err) return res.json({status:"error", message:"no se pudo cerrar la sesión"});
        res.json({status:"success", message:"sesion finalizada"});
    });
}