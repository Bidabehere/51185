import * as dotenv from "dotenv";
dotenv.config();

export const options = {
    server:{
        port:process.env.PORT,
        secretSession:process.env.SECRET_SESSION,
    },
    gmail:{
        emailToken:process.env.SECRET_TOKEN_EMAIL,
        emailAdmin:process.env.EMAIL_ADMIN,
        emailPass:process.env.EMAIL_PASSWORD
    },
    mongo:{
        url:process.env.MONGO_URL
    }
};