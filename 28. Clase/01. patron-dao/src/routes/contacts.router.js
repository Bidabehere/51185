import {Router} from "express";
import { ContactMemory } from "../dao/managers/memory/contacts.memory.js";
import { ContactsMongo } from "../dao/managers/mongo/contacts.mongo.js";

const router = Router();

//const contactsService = new ContactMemory();
const contactsService = new ContactsMongo();


router.get("/", async (req,res)=>{
    try {
        
        const contacts = await contactsService.get();
        res.send({status: "success", payload: contacts})
    } catch (error) {
        res.send({status:"error", message: error})
    }
})

router.post("/", async (req,res)=>{
    try {
        
        const contactCreated = await contactsService.post(req.body);
        res.send({status: "success", payload: contactCreated})

    } catch (error) {
        res.send({status:"error", message: error})
    }
})

export { router as contactRouter };