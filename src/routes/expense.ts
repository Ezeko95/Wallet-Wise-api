import { Router } from 'express';
import { getExpenses, postExpense } from '../Handlers/expenseHandler';

const expenseRouter: Router = Router();

expenseRouter.get('/', getExpenses);
expenseRouter.post('/:id', postExpense);

export default expenseRouter;
