import { Router } from "express";
import { deleteShared, getRoomById, postShared } from "../Handlers/sharedHandler"

const sharedRouter: Router = Router();

    sharedRouter.get("/:id", getRoomById)

    sharedRouter.post("/:id", postShared);

    sharedRouter.delete("/:id", deleteShared);

export default sharedRouter;