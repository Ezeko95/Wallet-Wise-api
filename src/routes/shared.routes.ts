import { Router } from "express";
import { getShared, postShared } from "../Handlers/sharedHandler"

const sharedRouter: Router = Router();

    sharedRouter.get("/:id", getShared)

    sharedRouter.post("/:id", postShared);

export default sharedRouter;