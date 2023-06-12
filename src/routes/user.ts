import { Router } from "express";
import { getUsers, postUser } from "../Handlers/users";
const userRouter: Router = Router();

userRouter.get("/", getUsers);
userRouter.post("/", postUser);

export default userRouter;
