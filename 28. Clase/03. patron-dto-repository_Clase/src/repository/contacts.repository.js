import { CreateContactDto, GetContactDto } from "../dao/dto/contact.dto.js";

export class ContactRepository{
    constructor(dao){
        this.dao = dao;
    }
    async getContacts(){
        const contacts = await this.dao.get()
        return contacts;
    }
    async createContac(contact){
        const contactDto = new CreateContactDto(contact)
        const contactCreated = await this.dao.post(contactDto);
        return contactCreated;
    }
}