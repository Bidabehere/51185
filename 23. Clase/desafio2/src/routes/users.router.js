import Routers from "./router.js";

export default class UserRouter extends Routers{
    init(){
        this.get('/', (req,res)=>{
            res.send('Hola Coders!!')
        })
    }
}