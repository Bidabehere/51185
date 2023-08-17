import { Router } from "express";
import {UserModel} from "../daos/models/user.model.js";
import { checkRole,checkAuthenticated } from "../middlewares/auth.js";
import { UserController } from "../controllers/users.controller.js";
import { uploaderDocument } from "../utils.js";

const router = Router();

router.put("/premium/:uid", checkRole(["admin"]) , UserController.changeRol);

router.put("/:uid/documents",
checkAuthenticated,
uploaderDocument.fields(
    [{name:"identificacion",maxCount:1},
    {name:"domicilio", maxCount:1},
    {name:"estadoDeCuenta", maxCount:1}]), 
UserController.updateUserDocument
)

export {router as usersRouter};