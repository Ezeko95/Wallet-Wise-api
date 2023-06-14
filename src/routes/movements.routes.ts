import { Router } from 'express';
import { getExpenses, getIncomes, postMovement, hideExpense, hideIncome } from '../Handlers/movementsHandler';

const movementRouter: Router = Router();

movementRouter.get('/expenses/:id', getExpenses);

movementRouter.get('/incomes/:id', getIncomes);

movementRouter.post('/:id', postMovement);

movementRouter.delete('/expense/:id', hideExpense);

movementRouter.delete('/income/:id', hideIncome);

export default movementRouter;
