import { Router } from "express";
import { getUsers, getUsersById,saveUser } from "../controllers/users.controller.js";


const router = Router();

router.get("/", getUsers);
router.post("/", saveUser);
router.get("/:uid", getUsersById);

export {router as userRouter};