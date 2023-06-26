import { Router } from "express";
import { getAllOrders, getOrderById, createOrder, resolveOrder  } from "../controllers/orders.controllers.js"

const router = Router();

router.get("/", getAllOrders);
router.get("/:oid", getOrderById);
router.post("/", createOrder);
router.put("/:oid", resolveOrder);

export {router as orderRouter};
