
export class ContactMemory {
    constructor(){
        this.contacts = [{
            nombre:'Luis',
            telefono:'33256123125',
            email:'bida@mail.com'
        }];
    }
    get(){
        return this.contacts;
    }
    post(contact){
        this.contacts.push(contact);
        return contact
    }

}