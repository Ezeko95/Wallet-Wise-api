import { Router } from "express";
import userRouter from "./user";
import expenseRouter from "./expense"
import sharedRouter from "./shared";
const router = Router();

router.use("/user", userRouter);
router.use("/expense", expenseRouter)
router.use("/shared", sharedRouter)

export default router;
