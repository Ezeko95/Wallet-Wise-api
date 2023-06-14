import { Router } from "express";
import userRouter from "./user";
import movementRouter from "./movements"
import sharedRouter from "./shared";
import balanceRouter from "./balance";
const router = Router();

router.use("/user", userRouter);
router.use("/movement", movementRouter)
router.use("/balance", balanceRouter)
router.use("/shared", sharedRouter)

export default router;
