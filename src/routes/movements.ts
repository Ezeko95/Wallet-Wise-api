import { Router } from 'express';
import { getExpenses, getIncomes, postMovement } from '../Handlers/movementsHandler';

const movementRouter: Router = Router();

movementRouter.get('/expenses/:id', getExpenses);

movementRouter.get('/incomes/:id', getIncomes);

movementRouter.post('/:id', postMovement);

export default movementRouter;
