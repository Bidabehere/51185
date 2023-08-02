import express from "express";
import { connectDB } from "./config/dbConnection.js";
import {options} from "./config/options.js";
import { engine } from 'express-handlebars';
import { __dirname } from "./utils.js";
import { swaggerSpecs } from "./config/docConfig.js";
import swaggerUi from "swagger-ui-express";
import path from "path";

import passport from "passport";
import session from "express-session";
import MongoStore from "connect-mongo";
import { initializePassport } from "./config/passport.config.js";

import { authRouter } from "./routes/auth.routes.js";
import { cartsRouter } from "./routes/carts.routes.js";
import { productsRouter } from "./routes/products.routes.js";
import { viewsRouter } from "./routes/views.routes.js";
import { usersRouter } from "./routes/users.routes.js";

const port = 8080;
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(port,()=>console.log(`Server ok`));

//configuracion de handlebars
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,"/views"));

//conectamos la base de datos
connectDB();

//configuracion session
app.use(session({
    store: MongoStore.create({
        mongoUrl:options.mongo.url
    }),
    secret:options.server.secretSession,
    resave:false,
    saveUninitialized:false
}));

//configuracion de passport
initializePassport();
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use(viewsRouter);
app.use("/api/sessions", authRouter);
app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);
app.use("/api/users", usersRouter);
//Ruta de la documentacion
app.use("/api/docs", swaggerUi.serve,swaggerUi.setup(swaggerSpecs));