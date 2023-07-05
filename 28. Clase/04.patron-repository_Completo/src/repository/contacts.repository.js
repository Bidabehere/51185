import {CreateContactDto,GetContactDto} from "../dao/dto/contact.dto.js";

export class ContactRepository{
    constructor(dao){
        this.dao = dao;
    };

    async getContacts(){
        const contacts = await this.dao.get();
        return contacts;
    };

    async createContact(contact){
        const contactDto = new CreateContactDto(contact);
        const contactCreated = await this.dao.post(contactDto);
        return contactCreated;
    };

    async getContact(id){
        const contact = await this.dao.getById(id);
        const result = new GetContactDto(contact);
        return result;
    };
}