import { Router } from "express";
import { handleLoginAdmin, putUser, postAdmin, searchUser, userBan, userSuspend  } from "../Handlers/adminHandler";
import { auth } from "../authMiddleware"; // AUTHMIDDLEWARE QUE CHEQUEA SI EL USUARIO TIENE CREDENCIALES PARA NAVEGAR LAS RUTAS! NO BORRAR!!!!

const adminRouter: Router = Router();

adminRouter.post('/register', postAdmin);

adminRouter.post("/login", handleLoginAdmin);

adminRouter.put("/premium/:id", putUser)

adminRouter.put("/ban/:id", userBan);

adminRouter.put("/suspend/:id", userSuspend);

export default adminRouter;