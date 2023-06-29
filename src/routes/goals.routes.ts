import { Router} from "express"
import { getAllGoals, getGoal, postGoal, putGoal } from "../Handlers/goalHandler";

const goalsRouter: Router = Router();

goalsRouter.post('/:id', postGoal);
goalsRouter.get('/:id', getGoal);
goalsRouter.get('/all/:id', getAllGoals);
goalsRouter.put('/:id', putGoal);

export default goalsRouter;