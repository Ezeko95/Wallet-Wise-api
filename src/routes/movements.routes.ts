import { Router } from 'express';
import { postMovement } from '../Handlers/movementsHandler';
import { getExpenses, hideExpense } from '../Handlers/expenseHandler'
import { getIncomes, hideIncome } from '../Handlers/incomeHandler'

const movementRouter: Router = Router();

    movementRouter.post('/:id', postMovement);




    movementRouter.get('/expenses/:id', getExpenses);

    movementRouter.delete('/expense/:id', hideExpense);



    movementRouter.get('/incomes/:id', getIncomes);

    movementRouter.delete('/income/:id', hideIncome);

export default movementRouter;
