import { Router } from "express";
import { getAllBusiness, getBusinessById, createBusiness, addProduct } from "../controllers/business.controller.js";

const router = Router();

router.get("/", getAllBusiness);
router.get("/:bid",getBusinessById);
router.post("/",createBusiness);
router.put("/:bid/product",addProduct);

export {router as businessRouter};