import dotenv from "dotenv";

dotenv.config();

export const options = {
    server: {
        port: process.env.PORT
    },
    mongo:{
        url: process.env.MONGO_URL
    },
    gmail:{
        adminAccount: process.env.ADMIN_EMAIL,
        adminPass: process.env.ADMIN_PASS
    },
    twilio:{
        twilioId: process.env.TWILIO_ID,
        twilioToken: process.env.TWILIO_TOKEN,
        twilioPhone: process.env.TWILIO_PHONE

    }
}