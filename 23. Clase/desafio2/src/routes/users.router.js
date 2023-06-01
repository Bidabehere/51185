import Routers from "./router.js";

export default class UserRouter extends Routers{
    init(){
        this.get('/', ["PUBLIC"], (req,res)=>{
            res.sendSuccess("Hola Coders!!")
        })
        this.get('/profile', ["USER", "USER_PREMIUM"], (req,res)=>{
            res.sendSuccess(req.user)
        })
    }
}