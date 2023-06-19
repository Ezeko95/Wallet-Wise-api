import { Router } from "express";
import userRouter from "./user.routes";
import movementRouter from "./movements.routes";
import balanceRouter from "./balance.routes";
import accountRouter from "./account.routes";
import { auth } from "../authMiddleware"; // AUTHMIDDLEWARE QUE CHEQUEA SI EL USUARIO TIENE CREDENCIALES PARA NAVEGAR LAS RUTAS! NO BORRAR!!!!

const router = Router();

router.use("/user", userRouter);

router.use("/movement", movementRouter); // ACA VA EL AUTHMIDDLEWARE PARA PROTEGER LA RUTA

router.use("/balance", balanceRouter); // ACA VA EL AUTHMIDDLEWARE PARA PROTEGER LA RUTA

router.use("/account", accountRouter); // ACA VA EL AUTHMIDDLEWARE PARA PROTEGER LA RUTA

export default router;
