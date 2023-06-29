import twilio from "twilio";
import { options } from "./options.js";

//Credenciales 
const twilioAccount = options.twilio.twilioId;
const twilioToken = options.twilio.twilioToken;

//twilio phone
export const twilioPhone = options.twilio.twilioPhone;


//creamos el cliente
export const twilioClient = twilio(twilioAccount,twilioToken);