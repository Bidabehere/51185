import { Router } from "express";
import {contactService} from "../repository/index.js";

const router = Router();

router.get("/",async(req,res)=>{
    try {
        const contacts = await contactService.getContacts();
        res.json({status:"success", payload:contacts});
    } catch (error) {
        res.json({status:"error", message:error.message});
    }
});

router.post("/",async(req,res)=>{
    try {
        const contactCreated = await contactService.createContact(req.body);
        res.json({status:"success", payload:contactCreated});
    } catch (error) {
        res.json({status:"error", message:error.message});
    }
});

router.get("/:id",async(req,res)=>{
    try {
        const contact = await contactService.getContact(req.params.id);
        res.json({status:"success", payload:contact});
    } catch (error) {
        res.json({status:"error", message:error.message});
    }
});

export {router as contactsRouter}