import { Router } from "express";
import { getUsers, postUser, putUser } from "../Handlers/users";
const userRouter: Router = Router();

userRouter.get("/", getUsers);
userRouter.post("/", postUser);
userRouter.put("/:id", putUser);

export default userRouter;
