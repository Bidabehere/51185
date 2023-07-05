import {v4 as uuidv4} from 'uuid';

export class ContactsMemory{
    constructor(){
        this.contacts = [
            {
                id: "dfa9a886-484c-46df-a4da-jshkjahs",
                nombre:"pepe",
                telefono:"+46 9237982734",
                email:"pepe@gmail.com"
            }
        ];
    };

    get(){
        return this.contacts;
    };

    post(contact){
        contact.id = uuidv4();
        this.contacts.push(contact);
        return contact;
    };

    async getById(id){
        const contact = this.contacts.find(u=>u.id === id);
        if(!contact){
            throw new Error("No se encontro el usuario")
        }
        return contact;
    };
}