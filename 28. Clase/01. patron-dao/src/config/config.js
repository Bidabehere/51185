import dotenv from "dotenv";
dotenv.config();

export const options = {
    server:{
        port: process.env.PORT,
    },
    mongo:{
        url: process.env.MONGO_URL
    }
}