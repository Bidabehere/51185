import { Router } from "express";

export default class Routers{
    constructor(){
        this.router = Router();
        this.init();
    }
    getRouter(){
        return this.router;
    }
    init(){}
    get(path, ...callbacks){
        this.router.get(path, this.applyCallbacks(callbacks));
    }
    applyCallbacks(callbacks){
        
        return callbacks.map((callbacks)=> async(...params)=>{
            try {
                await callbacks.apply(this,params)
            } catch (error) {
                console.log(error);
                params[1].status(500).send({"error":error});
            }
        })
    }
}