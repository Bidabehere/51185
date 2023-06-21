import {Router} from "express";
import {renderchat, renderProducts, renderProduct, renderCart, renderSignup, renderLogin} from "../controllers/web.controller.js";

const router = Router();

router.get("/",renderchat);

router.get("/products",renderProducts);

router.get("/products/:pid",renderProduct);

router.get("/cart/:cid",renderCart);

//rutas vistas autenticacion
router.get("/signup",renderSignup);
router.get("/login",renderLogin);

export {router as webRouter}