import { Router } from "express";
import { getUser, getUsers, postUser, putUser } from "../Handlers/users";
const userRouter: Router = Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", getUser);
userRouter.post("/", postUser);
userRouter.put("/:id", putUser);

export default userRouter;
