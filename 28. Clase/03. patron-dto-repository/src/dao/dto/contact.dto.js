export class CreateContactDto {
    constructor(contact){
        this.nombre = contact.first_name;
        this.telefono = contact.telefono;
        this.email = contact.email;
    }  
}
export class GetContactDto{
    constructor(contactDB){
        this.nombreCompleto = contactDB.nombre + ' ' + contactDB.apellido;
        this.email = contactDB.email;
    }
}