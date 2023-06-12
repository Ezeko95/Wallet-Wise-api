import {Router} from "express";

const sharedRouter: Router = Router();

sharedRouter.get("/");
sharedRouter.post("/")

export default sharedRouter