import { contactsModel } from "../../models/contacts.model.js";


export class ContactsMongo{
    constructor(){
        this.model = contactsModel;
    }
    async get(){
        try {
            return this.model.find();
        } catch (error) {
            console.log(error)
        }
    }
    async post(contact){
        try {
            const contactCreated = await this.model.create(contact)
        } catch (error) {
            console.log(error)
            
        }
    }
}