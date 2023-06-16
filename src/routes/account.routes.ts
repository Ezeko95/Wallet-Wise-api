import { Router } from "express";
import { postAccount } from "../Handlers/accountHandler";

const accountRouter : Router = Router();

    accountRouter.post("/:id", postAccount);

export default accountRouter;