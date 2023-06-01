import { Router } from "express";
import jwt from 'jsonwebtoken';

export default class Routers{
    constructor(){
        this.router = Router();
        this.init();
    }
    getRouter(){
        return this.router;
    }
    init(){}
    get(path,policies, ...callbacks){
        this.router.get(path,this.handlePolicies(policies), this.generateCustomResponses, this.applyCallbacks(callbacks));
    }
    post(path,policies, ...callbacks){
        this.router.post(path,this.handlePolicies(policies), this.generateCustomResponses, this.applyCallbacks(callbacks));
    }
    put(path,policies, ...callbacks){
        this.router.put(path,this.handlePolicies(policies), this.generateCustomResponses, this.applyCallbacks(callbacks));
    }
    delete(path,policies, ...callbacks){
        this.router.delete(path,this.handlePolicies(policies), this.generateCustomResponses, this.applyCallbacks(callbacks));
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
    generateCustomResponses(req,res,next){
        res.sendSuccess = payload => res.send({status: "success",payload})
        res.sendServerError = error => res.status(500).send({status:"error", error})
        res.sendUserError = error => res.status(400).send({status:"error", error})
        next();
    }
    
    handlePolicies = policies => (req,res,next) =>{
        //policies = ['PUBLIC', 'PRIVATE', 'PREMIUM']
        if(policies[0] === "PUBLIC") return next()
        const authHeaders = req.headers.authorization;
        if(!authHeaders) return res.status(401).send('Sin token de seguridad');

        const token = authHeaders.split(" ")[1]
        const user = jwt.verify(token, "CoderSecretClaseRouter");

        if(!policies.includes(user.role.toUpperCase())) return res.status(403).send('No autorizado');
        req.user = user;
        next()

    }

}