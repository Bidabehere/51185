import {Router} from "express";
//import { ContactMemory } from "../dao/managers/memory/contacts.memory.js";
//import { ContactsMongo } from "../dao/managers/mongo/contacts.mongo.js";
//import { contactsDao } from "../dao/factory.js";
import {contactService} from "../repository/index.js"
const router = Router();

//const contactsService = new ContactMemory();
//const contactsService = new ContactsMongo();


router.get("/", async (req,res)=>{
    try {
        
        const contacts = await contactService.getContacts();
        res.send({status: "success", payload: contacts})
    } catch (error) {
        res.send({status:"error", message: error})
    }
})

router.post("/", async (req,res)=>{
    try {
        
        const contactCreated = await contactService.createContac(req.body);
        res.send({status: "success", payload: contactCreated})

    } catch (error) {
        res.send({status:"error", message: error})
    }
})

export { router as contactRouter };