import { contactsModel } from "../../models/contacts.model.js";

export class ContactsMongo{
    constructor(){
        this.model = contactsModel;
    };

    async get(){
        try {
            return this.model.find();
        } catch (error) {
            console.log(error.message);
            throw new Error("Hubo un error al obtener los contactos")
        }
    };

    async post(contact){
        try {
            const contactCreated = await this.model.create(contact);
            return contactCreated;
        } catch (error) {
            console.log(error.message);
            throw new Error("Hubo un error al crear el contacto")
        }
    };

    async getById(id){
        try {
            const contact = await this.model.findById(id);
            if(!contact){
                throw new Error("No se encontro el usuario")
            }
            return contact;
        } catch (error) {
            console.log(error.message);
            throw new Error("Hubo un error al crear el contacto")
        }
    };
}