import { Router } from "express";
import { deleteShared, getAllRooms, getRoomById, hideShared, postShared } from "../Handlers/sharedHandler"

const sharedRouter: Router = Router();

    sharedRouter.get("/:id", getRoomById)

    sharedRouter.post("/:id", postShared);

    sharedRouter.delete("/:id", deleteShared);

    sharedRouter.get("/all/:id", getAllRooms);
    
    sharedRouter.put("/:id", hideShared);

export default sharedRouter;