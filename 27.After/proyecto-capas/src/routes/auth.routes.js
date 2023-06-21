import {Router} from "express";
import {passportSignupController, productsRedirectController ,passportFailSignup,passportLoginController, passportFailLogin, logoutController} from "../controllers/auth.controller.js";

const router = Router();

router.post("/signup", passportSignupController , productsRedirectController);
router.get("/failure-signup", passportFailSignup);

router.post("/login",passportLoginController , productsRedirectController);
router.get("/failure-login", passportFailLogin);

router.post("/logout",logoutController);

export { router as authRouter};