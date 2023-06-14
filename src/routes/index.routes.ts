import { Router } from "express";
import userRouter from "./user.routes";
import movementRouter from "./movements.routes";
import balanceRouter from "./balance.routes";
const router = Router();

router.use("/user", userRouter);
router.use("/movement", movementRouter)
router.use("/balance", balanceRouter)

export default router;
