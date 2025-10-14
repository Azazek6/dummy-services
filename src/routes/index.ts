import { Router } from "express";
import User from "./user.route";
import Order from "./order.route";

const router = Router();

router.use("/users", User);
router.use("/orders", Order);

export default router;
