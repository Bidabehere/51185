import {options} from "../config/config.js";

const persistence = options.server.persistence;

let contactsDao;

switch (persistence) {
    case "mongo":
        const {connectDB} = await import("../config/dbConnection.js");
        connectDB();
        const {ContactsMongo} = await import("./managers/mongo/contacts.mongo.js")
        contactsDao = new ContactsMongo();
    break;
    
    case "memory":
        const {ContactMemory} = await import("./managers/memory/contacts.memory.js")
        contactsDao = new ContactMemory()
    break;

    case "sql":
        
        break;
}



export {contactsDao}