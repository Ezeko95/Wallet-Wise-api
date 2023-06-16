import { Router } from "express";
import userRouter from "./user.routes";
import movementRouter from "./movements.routes";
import balanceRouter from "./balance.routes";
import accountRouter from "./account.routes"

const router = Router();

    router.use("/user", userRouter);

    router.use("/movement", movementRouter);

    router.use("/balance", balanceRouter);

    router.use("/account", accountRouter);

export default router;
