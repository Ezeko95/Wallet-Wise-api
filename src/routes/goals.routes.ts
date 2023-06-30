import { Router} from "express";
import { getAllGoals, getGoal, hideGoal, postGoal, putGoal, deleteGoal } from "../Handlers/goalHandler";

const goalsRouter: Router = Router();

goalsRouter.post('/:id', postGoal);
goalsRouter.get('/:id', getGoal);
goalsRouter.get('/all/:id', getAllGoals);
goalsRouter.put('/:id', putGoal);
goalsRouter.delete('/:id', deleteGoal);
goalsRouter.put('/delete/:id', hideGoal);


export default goalsRouter;