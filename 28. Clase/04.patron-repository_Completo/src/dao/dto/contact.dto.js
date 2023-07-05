export class CreateContactDto{
    constructor(contact){
        this.nombre = contact.nombre;
        this.apellido = contact.apellido;
        this.nombreCompleto = `${contact.nombre} ${contact.apellido}`;
        this.telefono = contact.telefono;
        this.email = contact.email;
        this.password = contact.password;
    }
};

export class GetContactDto{
    constructor(contactDB){
        this.nombreCompleto = contactDB.nombreCompleto;
        this.telefono = contactDB.telefono;
        this.email = contactDB.email;
    }
};