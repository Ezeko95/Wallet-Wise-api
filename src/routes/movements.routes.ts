import { Router } from 'express';
import { postMovement } from '../Handlers/movementsHandler';
import { getExpenses, hideExpense } from '../Handlers/expenseClassification/expenseHandler';
import { getIncomes, hideIncome } from '../Handlers/incomeClassification/incomeHandler';
import { getIncomeDateFilter, getIncomeAccountFilter } from '../Handlers/incomeClassification/filterHandler';
import { getExpenseDateFilter, getExpenseAccountFilter } from '../Handlers/expenseClassification/filterHandler';

const movementRouter: Router = Router();

    movementRouter.post('/:id', postMovement);


    
    movementRouter.get('/expenses/:id', getExpenses);

    movementRouter.delete('/expense/:id', hideExpense);

    movementRouter.get('/expenseDateFilter/:id', getExpenseDateFilter);

    movementRouter.get('/expenseAccountFilter/:id', getExpenseAccountFilter);



    movementRouter.get('/incomes/:id', getIncomes);

    movementRouter.delete('/income/:id', hideIncome);

    movementRouter.get('/incomeDateFilter/:id', getIncomeDateFilter);

    movementRouter.get('/incomeAccountFilter/:id', getIncomeAccountFilter);


export default movementRouter;
