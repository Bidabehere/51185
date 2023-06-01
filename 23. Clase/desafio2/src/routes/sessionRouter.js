import Routers from "./router.js";
import jwt from "jsonwebtoken";

export default class SessionRoter extends Routers{
    init(){
        this.post('/login',["PUBLIC"], (req,res)=>{
            let user = {
                email: req.body.email,
                role: "USER"
            }
            const token = jwt.sign(user, "CoderSecretClaseRouter")
            res.sendSuccess({token})
        })
    }
}