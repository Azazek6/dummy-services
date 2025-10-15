import { Router } from "express";
import orderController from "../controllers/order.controller";

const router = Router();

router.post("/generate", orderController.createOrder);
router.get("/", orderController.getOrders);

export default router;
